/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPink: "#FB2E86",
        offNavyBlue: "#3F509E",
        navyBlue: "#151875",
        priceRed: "#FB2448",
        hoverBlue: "#2F1AC4",
        skyBlue: "#F3F9FF",
        pantonePurple: "#E0D3F5",
        offBlue: "#151875",
        offPurple: "#9F63B5",
        violetPurple: "#7E33E0",
        offGreen: "#19D16F",
      },
      maxWidth: {
        1200: "75rem",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
