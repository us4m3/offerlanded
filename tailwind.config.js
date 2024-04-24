/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      white: '#ffffff', //white
      black: '#000', //black
      primaryColor: '#060A2F', //darkblue
      secondaryColor: '#5A5A79', //greyish blue
      btnBg: '#398100', //dark green
      bgPink: '#FF6B6B', //pinkish red
      bgLightPink: '#FFB4B4', //light pink
      dividerColor: '#517BA9', //lightish blue
      hoverColor: '#073E99',
    },
  },
  plugins: [],
};
