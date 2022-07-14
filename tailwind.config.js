/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  safelist: [
    'h-32',
    'cyan-100',
    'cyan-200',
    'cyan-300',
    'cyan-400',
    'cyan-500',
    'from-cyan-100',
    'from-cyan-200',
    'from-cyan-300',
    'from-cyan-400',
    'from-cyan-500',
    'to-cyan-100',
    'to-cyan-200',
    'to-cyan-300',
    'to-cyan-400',
    'to-cyan-500'
  ]
}
