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
        apple: {
          bg: "#000000",
          surface: "#0a0a0a",
          surfaceHover: "#1a1a1a",
          border: "#2a2a2a",
          text: "#f5f5f7",
          textSecondary: "#a1a1a6",
          textTertiary: "#6e6e73",
          accent: "#0071e3",
          accentHover: "#0077ed",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
