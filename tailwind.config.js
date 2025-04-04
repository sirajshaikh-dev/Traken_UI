import trakenPlugin from './src/plugin/traken-plugin.js';


// @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './dist/**/*.{js,jsx,ts,tsx}',
    './node_modules/@traken-ui/react/**/*.{js,ts,jsx,tsx,mdx}',
    "./stories/**/*.{js,ts,jsx,tsx}", //  Storybook files
    "./.storybook/**/*.{js,ts,jsx,tsx}" //  Storybook config
  ],
    
  theme: {
    extend: {},
  },
  plugins: [
    trakenPlugin
  ],
};
