/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tmdbDarkBlue: "rgb(3, 37, 65)",
        tmdbLightGreen: "rgb(0, 187, 173)",
        tmdbLightBlue: "rgb(l, 180,228)",
      },
      backgroundImage: {
        banner:
          "url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg')",
      },
    },
  },
  plugins: [],
};
