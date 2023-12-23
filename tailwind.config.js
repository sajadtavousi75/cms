/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:{
        sm:'1rem',
        lg:'3rem',
        xl:'4rem',
        '2xl': '5rem'
      }
    },
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

