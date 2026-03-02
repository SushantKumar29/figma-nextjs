import * as React from "react";

// Filter out framer-motion specific props
const filterMotionProps = (props: object) => {
  const motionProps = [
    "initial",
    "animate",
    "exit",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView",
    "viewport",
    "transition",
    "variants",
    "layout",
    "layoutId",
  ];

  const filtered: { [key: string]: unknown } = {};
  for (const [key, value] of Object.entries(props)) {
    if (!motionProps.includes(key)) {
      filtered[key] = value;
    }
  }
  return filtered;
};

const mockMotionComponent = (type: string) => {
  const Component = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const filteredProps = filterMotionProps(props);
    return React.createElement(type, filteredProps, children);
  };
  Component.displayName = `motion.${type}`;
  return Component;
};

export const motion = {
  section: mockMotionComponent("section"),
  div: mockMotionComponent("div"),
  article: mockMotionComponent("article"),
  h2: mockMotionComponent("h2"),
  h3: mockMotionComponent("h3"),
  p: mockMotionComponent("p"),
  span: mockMotionComponent("span"),
  img: mockMotionComponent("img"),
  button: mockMotionComponent("button"),
};

export default motion;
