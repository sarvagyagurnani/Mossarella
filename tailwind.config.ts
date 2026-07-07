import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E6",
        beige: "#E6D8C3",
        stone: "#CBBBA0",
        olive: "#3F4A2F",
        moss: "#6C7A4F",
        charcoal: "#0D0D0B",
        ink: "#171713",
        warmWhite: "#FFFCF5",
        sage: "#9EA58A",
        clay: "#A96F44"
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        accent: ["var(--font-accent)", "Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(13, 13, 11, 0.08)",
        lift: "0 24px 70px rgba(63, 74, 47, 0.16)",
        dark: "0 20px 70px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "moss-grain":
          "radial-gradient(circle at 20% 10%, rgba(108, 122, 79, 0.18), transparent 28%), radial-gradient(circle at 88% 22%, rgba(169, 111, 68, 0.12), transparent 24%), linear-gradient(135deg, #FFFCF5 0%, #F5F0E6 45%, #E6D8C3 100%)"
      }
    }
  },
  plugins: []
};

export default config;
