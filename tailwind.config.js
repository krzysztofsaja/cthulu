/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      primary: "#271D1F",
      secondary: "#C59C71",
      mainBg: "#84939A",
      textBg: "#F5F5F5",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
},
colors:{
  transparent: 'transparent',
  'white': '#ffffff',
  'black': '#000000',
  'primary_dark': '#271D1F',
  'gold_button': '#C59C71',
  'main_bg': '#84939A',
  'text_bg': '#F5F5F5',
}
  plugins: [],
};
