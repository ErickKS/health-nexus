import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    boxShadow: {
      sm: "0 0 4px 0 rgba(0, 0, 0, 0.25)",
      main: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
    },
    extend: {
      screens: {
        xs: "440px",
      },
      animation: {
        levitation: "levitation 5s linear infinite",
        blink: "blink 1s infinite",
      },
      keyframes: {
        levitation: {
          "0%, 100%": { transform: "translate(5%, 10%)" },
          "50%": { transform: "translate(0, 0)" },
        },
        blink: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
