import { cloneElement, isValidElement, Children } from "react";

const ControlledFlow = ({ children, currentIndex, goNext, onDone }) => {
  const onNext = (dataFromStep) => {
    if (currentIndex + 1 < children.length) {
      goNext(dataFromStep);
    } else {
      onDone(dataFromStep);
    }
  };

  const childElement = Children.toArray(children)[currentIndex];

  if (isValidElement(childElement)) {
    return cloneElement(childElement, {
      onNext,
    });
  }

  return childElement;
};

export default ControlledFlow;
