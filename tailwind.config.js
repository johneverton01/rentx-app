/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Archivo_600SemiBold',
        body: 'Archivo_500Medium',
        txt: 'Inter_400Regular',
        txtMed: 'Inter_500Medium',
      },
    },
    colors: {
      red: {
        500: '#DC1637',
        400: '#fdedef',
      },
      green: '#03B252',
      black: '#1B1B1F',
      white: '#FFFFFF',
      gray: {
        700: '#29292e',
        600: '#47474D',
        500: '#7A7A80',
        400: '#AEAEB3',
        300: '#e1e1e8',
        200: '#f4f5f6',
        100: '#ebebf0',
      },
    },
  },
  plugins: [],
}
