/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('images/background.png')",
      },
      fontSize: {
        xxs: "0.625rem", // 10px
        xxxs: "0.5rem", // 8px
        xxxxs: "0.375rem", // 6px
      },
    },
  },
  plugins: [],
};
