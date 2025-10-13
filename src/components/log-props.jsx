/* eslint-disable no-unused-vars */
const LogProps = (WrappedComponent) => {
  return (props) => {
    console.log(props);
    return <WrappedComponent {...props} />;
  };
};

export default LogProps;
