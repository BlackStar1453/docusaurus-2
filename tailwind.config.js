/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '3xl',  // 示例，根据需要自定义
        'h2': '2xl',
        'h3': 'xl',
        'h4': 'lg',
        'h5': 'md',
        'h6': 'sm',
      },
      fontWeight: {
        'h1': 'bold',
        'h2': 'bold',
      }
    },
  },
  plugins: [],
}

