module.exports = (ctx) => ({
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("tailwindcss"),
    require("autoprefixer"),
    ctx.env === "production" ? require("cssnano") : false,
  ],
});
