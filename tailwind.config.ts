import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        "section-dark": "hsl(var(--section-dark))",
        "section-light": "hsl(var(--section-light))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float-feather-1": {
          "0%": {
            transform: "translateY(0) translateX(0) rotate(0deg)",
            opacity: "0",
          },
          "8%": { opacity: "1" },
          "20%": { transform: "translateY(20vh) translateX(30px) rotate(15deg)" },
          "40%": { transform: "translateY(40vh) translateX(-20px) rotate(-10deg)" },
          "60%": { transform: "translateY(60vh) translateX(40px) rotate(20deg)" },
          "80%": { transform: "translateY(80vh) translateX(-15px) rotate(-5deg)" },
          "92%": { opacity: "1" },
          "100%": {
            transform: "translateY(115vh) translateX(25px) rotate(25deg)",
            opacity: "0",
          },
        },
        "float-feather-2": {
          "0%": {
            transform: "translateY(0) translateX(0) rotate(0deg)",
            opacity: "0",
          },
          "6%": { opacity: "1" },
          "15%": { transform: "translateY(15vh) translateX(-25px) rotate(-12deg)" },
          "35%": { transform: "translateY(35vh) translateX(35px) rotate(18deg)" },
          "55%": { transform: "translateY(55vh) translateX(-30px) rotate(-8deg)" },
          "75%": { transform: "translateY(75vh) translateX(20px) rotate(15deg)" },
          "94%": { opacity: "1" },
          "100%": {
            transform: "translateY(115vh) translateX(-10px) rotate(-15deg)",
            opacity: "0",
          },
        },
        "float-feather-3": {
          "0%": {
            transform: "translateY(0) translateX(0) rotate(0deg)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "25%": { transform: "translateY(25vh) translateX(20px) rotate(8deg)" },
          "45%": { transform: "translateY(45vh) translateX(-40px) rotate(-15deg)" },
          "65%": { transform: "translateY(65vh) translateX(25px) rotate(12deg)" },
          "85%": { transform: "translateY(85vh) translateX(-20px) rotate(-10deg)" },
          "93%": { opacity: "1" },
          "100%": {
            transform: "translateY(115vh) translateX(15px) rotate(20deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-feather-1": "float-feather-1 linear infinite",
        "float-feather-2": "float-feather-2 linear infinite",
        "float-feather-3": "float-feather-3 linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
