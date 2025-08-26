module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1440px",
      },
      colors: {
        bananistyle: "var(--bananistyle)",
        "gray-20": "var(--gray-20)",
        "gray-90": "var(--gray-90)",
        "neutral-01": "var(--neutral-01)",
        "neutral-02": "var(--neutral-02)",
        "neutral-03": "var(--neutral-03)",
        "neutral-04": "var(--neutral-04)",
        "primary-0-1relive": "var(--primary-0-1relive)",
        "primary-02": "var(--primary-02)",
        "primary-03": "var(--primary-03)",
        "secondary-01": "var(--secondary-01)",
        "secondary-02": "var(--secondary-02)",
        "status-02": "var(--status-02)",
        "status-03": "var(--status-03)",
        "status-04": "var(--status-04)",
        white: "var(--white)",
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
      fontFamily: {
        "RE-LIVE-body1": "var(--RE-LIVE-body1-font-family)",
        "RE-LIVE-body1-button": "var(--RE-LIVE-body1-button-font-family)",
        "RE-LIVE-body2": "var(--RE-LIVE-body2-font-family)",
        "RE-LIVE-caption": "var(--RE-LIVE-caption-font-family)",
        "RE-LIVE-h2": "var(--RE-LIVE-h2-font-family)",
        "RE-LIVE-h3": "var(--RE-LIVE-h3-font-family)",
        sans: [
					"Pretendard",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "elevation-3": "var(--elevation-3)",
        shadow: "var(--shadow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
