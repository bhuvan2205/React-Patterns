import RecursiveComponent from "./components/RecursiveComponent";
import { nestedObject } from "./data/data";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>
        <h2 className="text-2xl font-bold my-2">Recursive Component</h2>
        <RecursiveComponent data={nestedObject} />
      </div>
    </>
  );
};

export default App;
