import { animate } from "framer-motion";

export const startAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const modalAnimation = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
    type: "spring",
    stiffness: 120,
  },
};
