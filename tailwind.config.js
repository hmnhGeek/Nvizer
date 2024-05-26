/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 70s linear infinite",
        "loop-scroll-rev": "loop-scroll-rev 70s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(50%)" },
          to: { transform: "translateX(-50%)" },
        },
        "loop-scroll-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(50%)" },
        },
      },
      colors: {
        primary: "#3238f2",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
