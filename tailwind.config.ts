import { dark } from "@mui/material/styles/createPalette";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252525",
        customWhite: "#D9D9D9",
        customPurple: "#ba9ffb",
        darkPurple: "#b377d8",
        // "#a688fa"
        // "#2E073F"
      },
    },
  },
  plugins: [],
};
export default config;
