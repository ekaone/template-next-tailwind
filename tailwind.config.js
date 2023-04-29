/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        "vc-border-gradient": `radial-gradient(at left top, ${theme(
          "colors.gray.500"
        )}, 50px, ${theme("colors.gray.800")} 50%)`,
      }),
    },
    colors: {
      gray: colors.zinc,
      "gray-1000": "rgb(17,17,19)",
      "gray-1100": "rgb(10,10,11)",
      vercel: {
        pink: "#FF0080",
        blue: "#0070F3",
        cyan: "#50E3C2",
        orange: "#F5A623",
        violet: "#7928CA",
      },
    },
  },
  plugins: [],
};
