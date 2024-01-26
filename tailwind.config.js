/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'className',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity:["disabled"],
      cursor:["disabled"],
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%"
      },
    },
  },
  
  plugins: [],
}

