/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'netflix-bold': ['NetflixSans-Bold', 'sans-serif'],
        'netflix-light': ['NetflixSans-Light', 'sans-serif'],
        'netflix-medium': ['NetflixSans-Medium', 'sans-serif'],
        'netflix-regular': ['NetflixSans-Regular', 'sans-serif']
      }
    }
  },
  plugins: []
}
