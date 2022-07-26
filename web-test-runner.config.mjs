export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 90,
      branches: 70,
      functions: 90,
      lines: 90
    }
  }
};
