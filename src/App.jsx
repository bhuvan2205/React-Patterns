import { BlueMediumButton, BlueSmallButton } from "./components/composition";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>
        <h2 className="text-2xl font-bold my-2">Composition</h2>

        <br />
        <BlueSmallButton text="Click me" />
        <br />
        <br />
        <BlueMediumButton text="Click me" />
      </div>
    </>
  );
};

export default App;
