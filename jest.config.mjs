import nextJest from "next/jest.js";

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^framer-motion$": "<rootDir>/__mocks__/framer-motion.ts",
    "^next/image$": "<rootDir>/__mocks__/image.tsx",
  },
  clearMocks: true,
};

export default createJestConfig(customJestConfig);
