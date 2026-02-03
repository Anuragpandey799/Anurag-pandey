/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        dark: "#0c87b8",
        light: "#3fbaeb",
        DEFAULT: "#0fa9e6",
      },

      backgroundImage: {
        // bgImgHome: "url('src/assets/bgImgHome.jpg')",
        // bgImgHome: "url('src/assets/AP_design.png')",
      },

      fontFamily: {
        montserrat: ["Montserrat", "serif"], // para
        Roboto: ["Roboto", "serif"], // para
        codePro: ["Source Code Pro", "serif"], // para
        Newsreader: ["Newsreader", "serif"], //para
        Markazi: ["Markazi Text", "serif"], //para
        latothin: ["Lato", "serif"], // para
        eliteRegular: ["Special Elite", "serif"], // horror --para
        Patua: ["Patua One", "serif"], // heading
        sketch: ["Londrina Sketch", "serif"], // for outer border /heading
        Bungee: ["Bungee Spice", "serif"], //heading -- extra bold
        sketchRegular: ["Rubik Dirt", "serif"], // extra bold /heading
        Oswald: ["Oswald", "serif"], //para/subheading
        Convergence: ["Sixtyfour Convergence", "serif"], //for screen glitch
      },
    },

  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       'tablet': '640px',
//       // => @media (min-width: 640px) { ... }

//       'laptop': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'desktop': '1280px',
//       // => @media (min-width: 1280px) { ... }
//     },
//   }
// }
