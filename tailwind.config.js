/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}