import React from "react";

const PartialComponent = (Component, partialProps) => {
  return (props) => <Component {...partialProps} {...props} />;
};

export default PartialComponent;
