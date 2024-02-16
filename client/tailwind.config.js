module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        xsm:"300px",
        sm: "550px", // extra small
        md: "850px", // super extra small
        lg: "1200px",
      },
    },
    plugins: [],
  },
};
