/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
   theme: {
    fontFamily: {
      'sofia-pro': ['Sofia Pro', 'sans-serif'],
    },
    fontSize: {
      'xs-sofia': ['10px', { lineHeight: '14px', fontFamily: 'sofia-pro' }],
      'sm-sofia': ['12px', { lineHeight: '16px', fontFamily: 'sofia-pro' }],
      'base-sofia': ['16px', { lineHeight: '24px', fontFamily: 'sofia-pro' }],
      'lg-sofia': ['20px', { lineHeight: '28px', fontFamily: 'sofia-pro' }],
      'xl-sofia': ['24px', { lineHeight: '32px', fontFamily: 'sofia-pro' }],
      '2xl-sofia': ['32px', { lineHeight: '40px', fontFamily: 'sofia-pro' }],
      '3xl-sofia': ['40px', { lineHeight: '48px', fontFamily: 'sofia-pro' }],
      '4xl-sofia': ['48px', { lineHeight: '56px', fontFamily: 'sofia-pro' }],
      '5xl-sofia': ['64px', { lineHeight: '72px', fontFamily: 'sofia-pro' }],
    },

     extend: {},
   },
   plugins: [],
 }
 

