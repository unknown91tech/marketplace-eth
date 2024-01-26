/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  darkMode: 'className',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',

      'text-red-100',
      'text-red-200',
      'text-red-300',
      'text-red-400',
      'text-red-500',
      'text-red-600',
      'text-red-700',
      'text-red-800',
      'text-red-900',
      'text-yellow-100',
      'text-yellow-200',
      'text-yellow-300',
      'text-yellow-400',
      'text-yellow-500',
      'text-yellow-600',
      'text-yellow-700',
      'text-yellow-800',
      'text-yellow-900',
      'text-indigo-100',
      'text-indigo-200',
      'text-indigo-300',
      'text-indigo-400',
      'text-indigo-500',
      'text-indigo-600',
      'text-indigo-700',
      'text-indigo-800',
      'text-indigo-900',
      'text-blue-100',
      'text-blue-200',
      'text-blue-300',
      'text-blue-400',
      'text-blue-500',
      'text-blue-600',
      'text-blue-700',
      'text-blue-800',
      'text-blue-900',
      
      
      
      
      
    
  ],
  theme: {
    screens: {
      "xs": "475px",
      'md': '768px',
      ...defaultTheme.screens
    },
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

