module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	backgroundImage: theme => ({
        'm-image-hero': "url('./helpers/images/mobile-image-hero-1.jpg')",
        'd-image-hero': "url('./helpers/images/desktop-image-hero-1.jpg')",
        'about-light': "url('./helpers/images/image-about-light.jpg')",
        'about-dark': "url('./helpers/images/image-about-dark.jpg')",
       
    	})
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      
    },
  },
  plugins: [],
}
