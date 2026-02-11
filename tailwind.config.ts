import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DEFAULT: "#1C1C1C", // майже чорний (текст/кнопки)
        soft: "#2A2A2A",    // м’якший темний
        muted: "#6B6B6B",   // вторинний текст
        gold: "#B59B5B",    // акцент “золото”
        paper: "#FFFBF2",     // теплий “папір”
        surface: "#FFFFFF",   // білий
        border: "#E7E2D6",    // тепла лінія/бордер
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
      },

      fontFamily: {
        // якщо підключиш шрифти через next/font — залишимо,
        // але ці сімейства зручні як fallback
        sans: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },

      letterSpacing: {
        tightish: "-0.02em",
      },

       screens: {
      sm: '480px',
      md: '768px',
      lg: '1100px',
      bg: '1440px'
    }
    },
  },
  plugins: [],
};

export default config;
