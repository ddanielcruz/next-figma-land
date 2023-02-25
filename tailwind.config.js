/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#252B42',
        secondary: '#737373'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      maxWidth: {
        container: '1440px'
      }
    }
  },
  plugins: []
}
