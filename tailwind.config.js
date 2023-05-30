/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      //Transparent
      "transparent": "transparent",
      //Blues
      "blue-1": "#090E1C",
      "blue-2": "#131826",
      "blue-3": "#171C2C",
      "blue-4": "#1E263A",
      //Greys
      "grey-1": "#707FA4",
      "grey-2": "#A0AED1",
      "grey-3": "#C4CCE0",
      //Whites
      "white-1": "#E0E5F3",
      //Brand
      "brand-1": "#4ECB71",
      "brand-2": "#3EA25A",
    },
    fontSize: {
      "sm": ["14px"],
      "base": ["16px"],
      "xl": ["48px"],
      "2xl": ["72px", 1],
    },
    fontFamily: {
      calsans: ["var(--font-calsans)"],
      jakarta: ["var(--font-jakarta)"],
    },
  },
  plugins: [],
};
