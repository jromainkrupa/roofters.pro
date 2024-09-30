// See the Tailwind default theme values here:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config */
module.exports = {
  darkMode: 'class',

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],

  content: [
    './app/components/**/*.rb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.erb',
    './app/views/**/*.haml',
    './app/views/**/*.slim',
    './lib/jumpstart/app/views/**/*.erb',
    './lib/jumpstart/app/helpers/**/*.rb',
  ],

  // All the default values will be compiled unless they are overridden below
  theme: {
    // Extend (add to) the default theme in the `extend` key
    extend: {
      // Create your own at: https://javisperez.github.io/tailwindcolorshades
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        tertiary: colors.gray,
        danger: colors.red,
        success: colors.green,
        info: colors.blue,
        warning: colors.yellow,
        accent: colors.orange,
        light: colors.gray,
        dark: colors.gray,
        disabled: colors.gray,
        'blue-ribbon': {
          '50': '#F2FBFF', 
          '100': '#E6F7FF', 
          '200': '#C2E8FF', 
          '300': '#9ED5FF', 
          '400': '#53A5FC', 
          '500': '#0965FC', 
          '600': '#0959E3', 
          '700': '#0643BD', 
          '800': '#032F96', 
          '900': '#022273', 
          '950': '#01134A'
        },
        'sand': {
          '500': '#F9F3EF'
        }, 
        'deep-blue': {
          '500': '#051257'
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        'poppins': ['Poppins', 'sans-serif'],
        'righteous': ['Righteous', 'cursive'],
      },
    },
  },

  // Opt-in to TailwindCSS future changes
  future: {
  },
}
