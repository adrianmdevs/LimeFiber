/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily:{
      'Baloo':['"Baloo Da 2"','sans-serif'],
      'bruno-ace':['Bruno Ace','sans-serif'],
      'Dm Sans':['DM Sans','sans-serif']
    },
    extend: {
      colors:{
        'main-color':'#75A774',
        'secondary-color':'#3C3C43',
        'base-color':'#000000',
        'palette-color':'#FFFFFF',
        'search-background':'EFEFEF',
        'border-main-color':'#FFFFFF',
        'login-bg-color':'#6BAC6B',
        'sign-up-prompt-color':'#FF2626',
        'account-prompt-text':'#BEBCBC',
        'privacy-text-color':'#707070',
        'border-content-color':'#D8D8D8',
        'table-button-color':'#ECFDF3',
        'table-button-color-two':'#F2F4F7',
        'ticket-slot-color':'#F8A534',
        'ticket-hash-color':'#2E2C34',
        'ticket-description-color':'#84818A',
        'secondary-button-color': '#EBEAED',
        'news-section-background':'#F0FFFF',
        'sect-identifier':'#8A898E',
        'package-desc-color':'#331B3B'
    },
    aspectRatio:{
      '16/9':'16/9',
    }
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}
