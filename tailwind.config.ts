
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['KoPubWorld돋움', 'Noto Sans KR', 'sans-serif'],
        },
        colors: {
          'brand-green': '#59BD7B', // PANTONE 3405C
          'brand-navy': '#004261',  // PANTONE 303C
          'brand-dark-navy': '#002237', // 짙은 남색
          'brand-light-blue': '#ECF0F4', // 담청색 (기존 옅은 회색)
          'brand-orange': '#ED7D31', // 주황색
        },
      },
    },
    plugins: [],
  }
