/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        savanna: {
          bark: '#5b351f',
          cocoa: '#7b4a2a',
          clay: '#a7653c',
          sand: '#e9d7b7',
          cream: '#fff8ec',
          gold: '#d8a23a',
          leaf: '#48653a',
          sky: '#dce9ea'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(72, 46, 28, 0.12)'
      }
    }
  },
  plugins: []
};
