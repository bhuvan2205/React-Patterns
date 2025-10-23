import Parent from "./components/parent";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>
        <h2 className="text-2xl font-bold my-2">Observer Pattern</h2>
        <Parent />
      </div>
    </>
  );
};

export default App;
