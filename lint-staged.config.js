module.exports = {
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",
  "*.(tsx|ts|js)": ["eslint --fix", "prettier --write"],
  "*.(md|json)": "prettier --write",
};
