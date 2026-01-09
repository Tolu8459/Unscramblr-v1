import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      fontFamily:{
        sans:["Inter","system-ui","sans-serif"],
        display:["Sora","sans-serif"]

      },
    },
  },
  plugins: [],

  
};

export default config;