module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      boxShadow: {
        btnPrimary:
          "0px 10px 20px rgba(137, 229, 199, 0.50), inset 0px -3px 0px rgba(0, 0, 0, 0.15)",
        btnSecondary: "0px 10px 20px rgba(0, 0, 0, 0.099), inset 0px -3px 0px rgba(0, 0, 0, 0.15);",
      },
      fontSize: {
        base: [
          "clamp(1rem, 0.9120rem + 0.3756vw, 1.25rem)",
          {
            letterSpacing: "0.14px",
          },
        ],
        sm: [
          "clamp(1rem, 0.9560rem + 0.1878vw, 1.125rem)",
          {
            letterSpacing: "0.12px",
          },
        ],
        xs: [
          "1rem",
          {
            letterSpacing: "0.12px",
          },
        ],
      },
    },
  },
  plugins: [],
};
