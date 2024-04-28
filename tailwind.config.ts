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
      backgroundImage: {
        "sparkles-pattern": "url(/assets/sparkles.png)",
        "funny-gradient": "linear-gradient(45deg, hsl(150.61, 24.14%, 60.2%) 50%, hsl(0, 90.6%, 70.78%) 0%);",
      },
    },
  },
  plugins: [],
}
export default config
