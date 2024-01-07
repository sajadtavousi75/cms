/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:'#F5F5F5',
        pink: '#FF4081',
        cyan: '#007997',
        icon: '#6D7992',
        darkbg: '#1F2228',
        whitebg: '#2D3139'
      },
      fontFamily:{
        quickb:['quickbold'],
        quickr:['quickreg']
      }
    },
  },
  plugins: [],
}

