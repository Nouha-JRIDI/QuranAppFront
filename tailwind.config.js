import tailwindcssRtl from "tailwindcss-rtl";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#153d69",
        "light-blue": "#50b3b3",
      },
      width: {
        "100px": "100px",
        200: "200px",
      },
      height: {
        500: "500px",
        30: "30px",
      },
      boxShadow: {
        custom: "0px 0px 8px #aaa, -0px -0px 8px #ada6a6",
      },
    },
  },
  plugins: [tailwindcssRtl],
};
