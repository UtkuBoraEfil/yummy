const { fontFamily } = require("tailwindcss/defaultTheme");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "15px",
      sl: "17px",
      md: "28px",
      lg: "32px",
      xl: "48px",
      "2xl": "76px",
      "3xl": "160px",
      "4xl": "3.052rem",
      "3xlg": "122px",
      lglg: "30px",
      smd: "16px",
      smmd: "14px",
      lgmob: "22px",
      "3xlmob": "64px",
      smmob: "13px",
      mdm: "26px",
      mds: "24px",
      xlmd: "42px",
      xlmob: "36px",
      "2xlm": "58px",
      "2xlmob": "40px",
    },
    screens: {
      sm: "640px",
      lg: "810px",
      xl: "1200px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "my-white": "#ffffff",
        "my-white-smoke": "#f5f5f5",
        "my-black": "#0d0c0c",
        "my-dark-gray": "#0d0c0ccc",
        "my-light-gray": "#0d0c0c99",
        "my-orange": "#ef7d00",
      },
      width: {
        custom: "max(100vw - 16px, 1px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "desktop-image": "url('/backgrounds/hero-bg-desktop.png')",
        "mobile-image": "url('/backgrounds/hero-bg-mobile.png')",
        "dynamic-image1": "url('/locations/cepa.jpg')",
        "dynamic-image2": "url('/locations/kentpark.png')",
        "dynamic-image3": "url('/locations/ankamall.png')",
      },
      transitionProperty: {
        "flex-basis": "flex-basis",
      },
      transitionDuration: {
        "500": "500ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },

      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
