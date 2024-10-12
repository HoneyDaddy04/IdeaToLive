/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Includes all files in the app directory (Next.js app router)
    "./pages/**/*.{js,ts,jsx,tsx}", // Includes all pages (if you have a pages directory)
    "./components/**/*.{js,ts,jsx,tsx}", // Includes all components
    "./**/*.html" // Any other HTML files
  ],
  theme: {
    extend: {
 
      colors: {
        primary: "#4f46e5",
        secondary: "#ec4899",
        "bg-light": "#f3f4f6",
        "text-dark": "#1f2937",
        "text-light": "#6b7280",
      },
    },
  },
  plugins: [],
}
