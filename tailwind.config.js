/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Luxe minimalist palette: soft cream, deep clay, sage, ink
        cream: {
          50: "#FBF8F3",
          100: "#F4EFE6",
          200: "#E9E0CF",
          300: "#D9CDB4",
        },
        clay: {
          400: "#B79B82",
          500: "#9B7D63",
          600: "#7E6149",
          700: "#5C4633",
        },
        sage: {
          300: "#BFC7B1",
          500: "#8A9A7B",
          700: "#5A6A4F",
        },
        ink: {
          700: "#3D3833",
          900: "#1F1B17",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.28em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 12px 40px -20px rgba(31,27,23,0.25)",
      },
    },
  },
  plugins: [],
}
