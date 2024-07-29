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
    },
    colors: {
      mainBg: "rgb(119, 168, 163, 0.2)",
      red: "#EC032A",
      actionBg: "#04A998",
      greyBg: "#D9D9D9",
      greenBg: "#457D79",
      albumOverlay: "rgba(119, 168, 163, 0.2)",
    }
  },
  plugins: [],
};
export default config;
