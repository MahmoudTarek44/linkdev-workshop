const tailwindConfig = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7C16',
        secondary: '#0ECEFF',
        purple: '#F215B6',
        light_green: "#A6E51C",
        light_gray: '#74747433',
        dark_gray: "#5E6282",
        demo_red: '#E72228',
        dark_blue: '#181E4B',
        gradiant_bg: '#D5AEE4',
      },
      fontFamily: {
        poppins: ["Poppins", 'serif'],
        open_sans: ["Open Sans", 'serif'],
        volkhov: ["Volkhov", 'serif'],
      },
      animation: {
        'slow-spin': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
}

export default tailwindConfig
