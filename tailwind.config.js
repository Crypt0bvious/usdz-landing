module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glitch: ["'Press Start 2P'", "monospace"]
      },
      animation: {
        pulseSlow: "pulse 3s infinite"
      }
    },
  },
  plugins: [],
}