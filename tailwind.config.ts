import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'my-white': '#ffffff',
      'my-white-smoke': '#f5f5f5',
      'my-black': '#0d0c0c',
      'my-dark-gray': '#0d0c0ccc',
      'my-light-gray': '#0d0c0c99',
      'my-orange': '#ef7d00',
    },
    fontSize: {
      'sm': '15px',
      'sl': '17px',
      'md': '28px',
      'lg': '32px',
      'xl': '48px',
      '2xl': '76px',
      '3xl': '160px',
      '4xl': '3.052rem',
      '3xlg': '122px',
      'lglg': '30px',
      'smd': '16px',
      'smmd': '14px',
      'lgmob': '22px',
      '3xlmob': '64px',
      'smmob': '13px',
      'mdm': '26px',
      'mds': '24px',
      'xlmd': '42px',
      'xlmob': '36px',
      '2xlm': '58px',
      '2xlmob': '40px',
    },
    screens: {
      'sm': '640px',
      'lg': '810px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    extend: {
      width: {
        'custom': 'max(100vw - 16px, 1px)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "leaf-image": "url('/leafs.jpg')",
        "dynamic-image1": "url('/img1.jpg')",
        "dynamic-image2": "url('/img2.jpg')",
        "dynamic-image3": "url('/2.jpg')",
        "menu-image": "url('/menu.png')",
      },
      transitionProperty: {
        'flex-basis': 'flex-basis',
      },
      transitionDuration: {
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },

    },
  },
  plugins: [],
};
export default config;
