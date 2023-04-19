/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#00002e',
        'color2': '#0b245d',
        'color3': '#08184e',
        'color4': '#040c3e',
        'color5': '#00002e',
        'color-main1': '#FF00FC',
        'color-main2': '#00FFFC',
      },
    },
  },
  plugins: [],
}

