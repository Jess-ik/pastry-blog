import { Grey_Qo } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        licorice: ["var(--font-licorice)"],
        dmserif: ["var(--font-dmserif)"],
        dmsans: ["var(--font-dmsans)"],
      },
      colors: {
        dark: '#0f1118',
        dark600: '#3f4146',
        darkBlue: '#38415A',
        mainBlue: '#C3D3FF',
        lightBlue: '#DEE7FF',
        light: '#F4F8FF',
        grey: '#a2a4a7',
        lightGrey:'#D9D9D9'
      }
    },
  },
  plugins: [],
};
export default config;
