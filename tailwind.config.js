/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
  theme: {
    extend: {
        colors: {
            "laracasts": "rgb(150,130,200)"
        },
    },
  },
  plugins: [],
}

