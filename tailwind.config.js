module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a", // Dark Black
        darker: "#050505", // Slightly darker
        pink: {
          400: "#f472b6", // Lighter Pink
          500: "#ec4899", // Main Pink
          600: "#db2777", // Darker Pink
        },
      },
    },
  },
  plugins: [],
}