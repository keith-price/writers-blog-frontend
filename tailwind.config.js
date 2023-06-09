/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    // need to figure out font family
    //   theme: {
    //     fontFamily: {
    //       sans: ["ui-sans-serif", "system-ui"],
    //       serif: ["ui-serif", "Georgia"],
    //       mono: ["ui-monospace", "SFMono-Regular"],
    //       display: ["Oswald"],
    //       body: ["Open Sans"],
    //     },
    //   },
    // },
    plugins: [],
  },
};
