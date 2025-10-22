import { BlueSmallButton, BlueButton } from "./components/composition";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>
        <h2 className="text-2xl font-bold my-2">Composition</h2>
        <ul>
          <li className="my-2">
            <BlueButton text="Click me" />
          </li>
          <li className="my-2">
            <BlueSmallButton text="Click me" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
