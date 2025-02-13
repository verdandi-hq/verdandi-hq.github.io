
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        verdandi: {
          blue: "#0A1838",
          gold: "#D4AF37",
          "gold-light": "#FFD700",
          "blue-light": "#1C2F5A",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "0%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "text-shimmer": "text-shimmer 2.5s ease-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #D4AF37, #FFD700)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
