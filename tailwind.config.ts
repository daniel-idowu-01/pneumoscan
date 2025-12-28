export default {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#136dec',
        'background-light': '#f6f7f8',
        'background-dark': '#101822',
        'surface-light': '#ffffff',
        'surface-dark': '#141c27',
        'text-muted': '#92a9c9',
        'text-secondary': '#92a9c9',
        'border-light': '#e2e8f0',
        'border-dark': '#1e293b',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Noto Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
}