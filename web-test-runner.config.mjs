export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60
    }
  }
};
