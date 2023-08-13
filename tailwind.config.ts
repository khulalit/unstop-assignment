import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors: {
        "Secondary" : "#0073E6",
        "Accent_NewRed" : "#D63500",
        "Light_blue" : "#E5F1FC",
        "Text_Color_blue" : "#1C4980",
        "Bg_Light" : "#DADCE0",
        "accent_new_red" : "#D63500",
        "accent_red_light" : "#FBEBEA",
        "green" : '#05C165',
        "bg-color-2" : '#F6F8FA',
        "bg-light-2" : ' #F2F8FE',
      }
    },
  },
  plugins: [],
}
export default config
