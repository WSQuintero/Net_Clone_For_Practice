/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'netflix-bold': ['./public/fonts/NetflixSans-Bold.otf'],
        netflix: ['./public/fonts/NetflixSansBold.ttf'],
        netflixBlack: ['./public/fonts/NetflixSansBlack.ttf']
      }
    }
  },
  plugins: []
}
