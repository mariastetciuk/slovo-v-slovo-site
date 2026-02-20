import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soft: "#2A2A2A",
        muted: "#6B6B6B",   // вторинний текст
        gold: "#fecd46",    // акцент “золото”
        paper: "#f4f0e2",     // теплий “папір”
        hover: "#f4d0e2",
    
           // білий
        border: "#E7E2D6",    // тепла лінія/бордер
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      boxShadow: {
        soft: "0 24px 24px rgba(0,0,0,0.08)",
      },

        fontFamily: {
  roboto: "var(--font-roboto)",
  cinzel: "var(--font-cinzel)",
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
