import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "var(--surface)",
        "secondary-surface": "var(--secondary-surface)",
        "text": "var(--text)",
        "stroke": "var(--stroke)",
        "buttery-yellow": "var(--buttery-yellow)",
        "soft-teal": "var(--soft-teal)",
        "warm-coral": "var(--warm-coral)",
        "light-sky-blue": "var(--light-sky-blue)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        "fade-out": {
          to: { opacity: '0' },
        },
        "enter-dialog": {
          from: { opacity: '0', transform: 'translateY(45%) scale(0.95)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        "hide-dialog": {
          to: { opacity: '0' },
        },
        "enter-popover": {
          from: { opacity: '0', transform: 'translateY(-25%) scale(0.95)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      },
      animation: {
        "fade-in": 'fade-in 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        "fade-out": 'fade-out 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        "enter-dialog": 'enter-dialog 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        "hide-dialog": 'hide-dialog 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        "enter-popover": 'enter-popover 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        "sparkles-pattern": "url(/assets/sparkles.png)",
        "funny-gradient": "linear-gradient(45deg, hsl(150.61, 24.14%, 60.2%) 50%, hsl(0, 90.6%, 70.78%) 0%);",
      },
    },
  },
  plugins: [],
}
export default config
