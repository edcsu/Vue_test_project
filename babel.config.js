module.exports = {
  presets: ["@vue/app"],
  env: {
    test: {
      plugins: [
        [
          "istanbul",
          {
            exclude: ["/tests/**", "test_project/dist/*"]
          }
        ]
      ]
    }
  }
};
