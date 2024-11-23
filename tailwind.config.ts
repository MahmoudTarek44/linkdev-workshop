const tailwindConfig = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7C16',
        secondary: '#0ECEFF',
        purple: '#F215B6',
        light_green: "#A6E51C",
        light_gray: '#74747433',
        demo_red: '#E72228',
        gradiant_bg: '#D5AEE4',
      },
      typography: {
        poppins: ["Poppins", 'serif'],
        open_sans: ["Open Sans", 'serif'],
        volkhov: ["Volkhov", 'serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

export default tailwindConfig
