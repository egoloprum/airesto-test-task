import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {}
  },
  plugins: []
}
export default config
