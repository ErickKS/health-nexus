import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: "#123359",

      "blue-light": "#ECF2FF",
      "blue-extra-light": "#ECF2FF",

      black: "#000000",
      white: "#FFFFFF",
      gray: "#2E2E2E",
      red: "#DC2626",
      transparent: "transparent",
    },
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
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards",
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
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateY(-24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
