// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'vibrant-blue': '#0000ff',
        'deep-purple': '#800080',
        // Add more custom colors if needed
      },
    },
  },
  plugins: [],
};
