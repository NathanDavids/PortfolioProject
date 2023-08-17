/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'BackgroundColour': '#000000',
      'PrimaryTextColour': '#FFFFFF',
      'SecondaryTextColour': '#D9171F',
      'grey': '#d1d5db',
      primary: "var(--color-primary)",
      },
      backgroundImage: {
        texture:
        "url(https://toppng.com/uploads/preview/glow-effect-png-11552155518ynqhvrubkz.png), radial-gradient(var(--color-primary)), transparent 70"
      },
    },
  },
  plugins: [],
}