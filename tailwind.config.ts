import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#1E40AF",
        },
        accent: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#047857",
        },
        surface: "#FFFFFF",
        muted: "#F3F4F6",
      },
      spacing: {
        nav: "5rem",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
