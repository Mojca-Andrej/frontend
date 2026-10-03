// Zmanjša prevelike slike v public/ in zapiše njihove dimenzije v src/content/image-sizes.json.
// Uporaba: npm run images  (po dodajanju novih fotografij)
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = path.resolve("public");
const MANIFEST = path.resolve("src/content/image-sizes.json");
const MAX_EDGE = 2400;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) yield full;
  }
}

const manifest = {};
let saved = 0;

for await (const file of walk(PUBLIC)) {
  const input = await readFile(file);
  const meta = await sharp(input).metadata();
  const ext = path.extname(file).toLowerCase();
  const longEdge = Math.max(meta.width, meta.height);
  const needsResize = longEdge > MAX_EDGE;
  const needsRotate = (meta.orientation ?? 1) !== 1;
  const isLarge = input.length > 400_000;

  if (needsResize || needsRotate || isLarge) {
    let pipeline = sharp(input).rotate();
    if (needsResize) pipeline = pipeline.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside" });
    pipeline =
      ext === ".png"
        ? pipeline.png({ compressionLevel: 9, palette: true, quality: 90 })
        : ext === ".webp"
          ? pipeline.webp({ quality: 82 })
          : pipeline.jpeg({ quality: 80, mozjpeg: true });
    const output = await pipeline.toBuffer();
    // Zapiši le ob občutnem prihranku, da ponovni zagoni ne poslabšujejo kakovosti.
    if (output.length < input.length * 0.8 || needsRotate) {
      await writeFile(file, output);
      saved += input.length - output.length;
      console.log(
        `${path.relative(PUBLIC, file)}: ${(input.length / 1e6).toFixed(2)} MB -> ${(output.length / 1e6).toFixed(2)} MB`,
      );
    }
  }

  const { width, height } = await sharp(await readFile(file)).metadata();
  manifest["/" + path.relative(PUBLIC, file).split(path.sep).join("/")] = { width, height };
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");
console.log(
  `\nPrihranjeno: ${(saved / 1e6).toFixed(1)} MB, ${Object.keys(sorted).length} slik v ${path.relative(process.cwd(), MANIFEST)}`,
);
