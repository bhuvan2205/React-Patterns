import UncontrolledFlow from "./components/uncontrolled-flow";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import StepThree from "./components/step-three";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-8">Design Patterns - React</h1>

        <UncontrolledFlow
          onDone={(data) =>
            alert(`Completed the Flow with data: ${JSON.stringify(data)}`)
          }
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </UncontrolledFlow>
      </div>
    </>
  );
};

export default App;
