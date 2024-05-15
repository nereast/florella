/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'pink': '#FAD7F7',
      'gray': '#565584',
      'green': '#015B4D',
    },
    fontFamily: {
      title: ["Spectral", "Serif"],
      display: ["Open Sans", "San Serif"]
      
    },
    keyframes: {
      scroll: {
        to : { transform: 'translate(calc(-50% - 0.5rem))'},
      },
    },
    animation: {
      'scroll-horizontal': 'scroll 10s linear infinite',
    },
  },
  plugins: [
    plugin(function ({addUtilities}) {
      addUtilities({
        "h1": {
          fontSize: "100px",
          lineHeight: '90px',
          fontStyle: 'italic',
          fontWeight: '400',

          "@media (max-width: 1024px)": {
            fontSize: "60px",
            lineHeight: '80px',
          },

          "@media (max-width: 768px)": {
            fontSize: "60px",
            lineHeight: '50px',
          },

        },

        ".h2-heading": {
          fontSize: "35px",
          lineHeight: '37px',
          fontWeight: '500',

          "@media (max-width: 1024px)": {
            fontSize: "30px",
            lineHeight: '32px',
          },

          "@media (max-width: 768px)": {
            fontSize: "40px",
            lineHeight: '42px',
          },
        },

        "h2": {
          fontSize: "40px",
          lineHeight: '32px',
          fontWeight: '400',

          "@media (max-width: 1024px)": {
            fontSize: "35px",
            lineHeight: '37px',
          },

          "@media (max-width: 768px)": {
            fontSize: "30px",
            lineHeight: '32px',
          },

        },

        "h3": {
          fontSize: "30px",
          lineHeight: '32px',

          "@media (max-width: 1024px)": {
            fontSize: "25px",
            lineHeight: '27px',
          },

          "@media (max-width: 767px)": {
            fontSize: "15px",
            lineHeight: '17px',
          },
        },

        "h4": {
          fontSize: "25px",
          lineHeight: '27px',

          "@media (max-width: 1024px)": {
            fontSize: "20px",
            lineHeight: '22px',
          },

          "@media (max-width: 767px)": {
            fontSize: "15px",
            lineHeight: '17px',
          },
        },

        ".header-p": {
          fontSize: "25px",
          lineHeight: '27px',

          "@media (max-width: 1024px)": {
            fontSize: "20px",
            lineHeight: '22px',
          },
        },

        "p": {
          fontSize: "20px",
          lineHeight: '22px',
          fontStyle: 'italic',

          "@media (max-width: 1024px)": {
            fontSize: "15px",
            lineHeight: '17px',
          },
        },

        ".input-p": {
          fontSize: "14px",
          lineHeight: '16px'
        },
      });
    }),
  ],
}

