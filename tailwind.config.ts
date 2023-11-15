import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    boxShadow: {
      sm: "0 0 4px 0 rgba(0, 0, 0, 0.25)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
