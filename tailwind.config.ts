import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-100": "#118ab2",
        "primary-50": "#3a96ba",
        "primary-200": "#0d779a",
        "primary-300": "#096583",
        "primary-400": "#06536d",
        "primary-500": "#044257",
        "primary-600": "#032f41",
      },
      aspectRatio: {
        'A4': '1.44 / 1',
      },
    },
  },
  plugins: [],
};
export default config;
