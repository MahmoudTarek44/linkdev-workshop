const tailwindConfig = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {},
      typography: {}
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

export default tailwindConfig
