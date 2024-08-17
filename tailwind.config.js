/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'selector',
  
  theme: {
    extend: {
      colors:{
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "accent":"var(--accent-color)",
        "bg-color":"var(--background-color)",
        "txt-color":"var(--text)",
        "overlay":"var(--overlay)",
        "gray-7":"var(--text-gray)",
      },
    },
  },
  plugins: [],
}
