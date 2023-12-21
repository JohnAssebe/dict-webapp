/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        openSans: "Open Sans",
      },
      colors: {
        lightPink: "#EDD1FF",
        darkPink: "#F11CAA",
      },
    },
  },
  plugins: [],
};
