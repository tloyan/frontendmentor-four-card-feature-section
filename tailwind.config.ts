import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "hsl(0, 78%, 62%)",
          2: "hsl(180, 62%, 55%)",
          3: "hsl(34, 97%, 64%)",
          4: "hsl(212, 86%, 64%)"
        },
        neutral: {
          1: "hsl(234, 12%, 34%)",
          2: "hsl(229, 6%, 66%)",
          3: "hsl(0, 0%, 98%)"
        }
      },
      fontFamily: {
        sans: "var(--font-poppins)"
      }
    },
  },
  plugins: [],
};
export default config;
