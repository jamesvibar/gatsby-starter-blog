module.exports = {
  linters: {
    "*.+(json|yml|yaml|css|less|scss|md|graphql|mdx|js|jsx)": [
      "prettier --write",
      "git add",
    ],
  },
}
