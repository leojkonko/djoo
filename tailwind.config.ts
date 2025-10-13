import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Lady-J Custom Colors
        'ladyj-pink': '#FF0080',
        'ladyj-purple': '#8B00FF',
        'ladyj-neon': '#00FFFF',
        'ladyj-dark': '#0A0A0A',
        'ladyj-gray': '#1A1A1A',
        'ladyj-accent': '#FF6B9D',
      },
      fontFamily: {
        'sans': ['Helvetica', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
        'display': ['Impact', 'Helvetica', '-apple-system', 'Arial Black', 'sans-serif'],
        'body': ['Helvetica', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.8s ease-out',
        'scroll-text': 'scrollText 15s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF0080, 0 0 10px #FF0080, 0 0 15px #FF0080' },
          '100%': { boxShadow: '0 0 10px #FF0080, 0 0 20px #FF0080, 0 0 30px #FF0080' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollText: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(45deg, #FF0080, #8B00FF, #00FFFF)',
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
    },
  },
  plugins: [],
};
export default config;