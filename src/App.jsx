import ControlledForm from "./components/controlled-form";
import UncontrolledForm from "./components/uncontrolled-form";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-8">Design Patterns - React</h1>

        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-xl">UnControlled Form</h2>
            <UncontrolledForm />
          </div>

          <div>
            <h2 className="text-xl">Controlled Form</h2>
            <ControlledForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
