import React from "react";
import { cloneElement } from "react";
import { isValidElement } from "react";
import { useState } from "react";
import { Children } from "react";

const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (dataFromStep) => {
    const nextIndex = currentIndex + 1;
    const newData = { ...data, ...dataFromStep };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onDone(newData);
    }

    setData(newData);
  };

  const childElement = Children.toArray(children)[currentIndex];

  if (isValidElement(childElement)) {
    return cloneElement(childElement, {
      onNext: handleNext,
    });
  }

  return childElement;
};

export default UncontrolledFlow;
