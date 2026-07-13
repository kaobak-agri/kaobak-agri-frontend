/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        ivory: "#F8F3E9",
        beige: "#D8CCB8",
        obsidian: "#26352B",
        forest: "#26352B",
        olive: "#65725F",
        gold: "#9C7443",
        "soft-card": "#E5E8DC"
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        display: ["Newsreader", "Iowan Old Style", "Baskerville", "Georgia", "serif"],
        accent: ["Newsreader", "Iowan Old Style", "Georgia", "serif"],
        label: ["Inter", "Manrope", "sans-serif"]
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem"
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(77, 59, 36, 0.13)"
      }
    }
  },
  plugins: []
};
