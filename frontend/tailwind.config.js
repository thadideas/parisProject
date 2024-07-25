/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      blue: '#0073E5',
      gold: '#E5AC00',
      black: '#000000',
      green: '#1B750D',
      red: '#D50032',
      summerair: "#00ACE5",
      seafoam: "#00E5E5",
      sand: "#E3D7B5",
      silver: "#C5CFD8",
      bronze: "#CD7237",
      white: "#FFFFFF",
      black: "#000000",
      flame: "#E53900"
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Lobster', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

