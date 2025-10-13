import UncontrolledFlow from "./components/uncontrolled-flow";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import StepThree from "./components/step-three";
import ControlledFlow from "./components/controlled-flow";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentIndex(currentIndex + 1);
  };

  const onDone = (dataFromStep) => {
    const newData = { ...data, ...dataFromStep };
    setData(newData);
    alert(`Completed the Flow with data: ${JSON.stringify(newData)}`);
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-8">Design Patterns - React</h1>

        <ControlledFlow
          goNext={goNext}
          onDone={onDone}
          currentIndex={currentIndex}
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </ControlledFlow>
      </div>
    </>
  );
};

export default App;
