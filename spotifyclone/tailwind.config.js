/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    screens:{
      smallestDevices:"350px",
      smallDevices:"1150px"
    },
    fontFamily:{
      Roboto:['Roboto']
    }
  },
  plugins: [],
}

