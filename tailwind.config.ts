import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jet: ["JetBrains Mono"],
        arabic: ["Noto Naskh Arabic Variable"],
      },
      colors: {
        background: "#04080F",
        primary: "#507DBC",
        secondary: "#A1C6EA",
        pale: "#BBD1EA",
        white: "#DAE3E5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
