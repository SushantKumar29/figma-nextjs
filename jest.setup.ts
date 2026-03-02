import "@testing-library/jest-dom";
import React from "react";

jest.mock("framer-motion", () => ({
  motion: {
    div: (props: React.HTMLAttributes<HTMLDivElement>) => React.createElement("div", props),
  },
}));
