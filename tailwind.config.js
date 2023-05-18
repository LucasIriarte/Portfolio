/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#00010E',
        'color2': '#0b245d',
        'color3': '#08184e',
        'color4': '#040c3e',
        'color5': '#00002e',
        'color-main1': '#FF00FC',
        'color-main2': '#00FFFC',
        'button-default': '#113BE1',
        'button-default-clare': '#4268FF',
      },
      borderRadius: {
        "1/2": "50%",
      },
      maxWidth: {
        '250px': '250px',
        '200px': '200px',
      },
    },
  },
  plugins: [],
}