module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme =>({
        'banner-img': "url('./assest/image/banner.jpg')",
        'bg-img': "url('./assest/image/5.jpg')",
        'footerImg': "url('./assest/image/footer.png')",
        'bannerShop':"url('./assest/image/breadShop.jpg')",
      }),
       colors: {
        'white': '#ffffff',
        'praimary': '#9B9B9B',
        'gray': '#454444',
        'opacity': '#E0E0E0',
        'background':'#E0E0E0',
        'green':'#144E1F',
        'svg': '#00AEEF',
        'jobColor': '#484848',
      },

        fontSize: {
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    inset: {
         '-16': '-4rem',
        }
     

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
