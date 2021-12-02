module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/.*\\.test).(ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  verbose: true,
  testEnvironment: "jsdom",
};