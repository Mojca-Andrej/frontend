import { prozaVeronika } from "./proza";
import Content from "./components/content";

export default function Proza() {
    return (
        <main>
            <h1 className="text-2xl bg-gradient-to-r font-semibold text-transparent bg-clip-text from-purple-500 w-fit to-zinc-500 mb-4">Proza</h1>
            <Content proza={prozaVeronika} />
        </main>
    );
}