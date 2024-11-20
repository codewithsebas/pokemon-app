import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-pink": "#F9A8D4",
        "c-blue": "#93C5FD",
        "c-green": "#A7F3D0",
      },
    },
  },
  plugins: [],
} satisfies Config;
