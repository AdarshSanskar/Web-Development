/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Add this if your HTML is in the root
    "./src/**/*.{html,js}", // Keep this for your source files
  ],
  theme: {
    extend: {
      screens: {
        lg: "1300px",
      },
      // DEBUG: If this works, your background will turn red
      // when you use class "bg-debug". If it doesn't, config isn't loading.
      colors: {
        debug: "#ff0000",
      },
    },
  },
  plugins: [],
};
