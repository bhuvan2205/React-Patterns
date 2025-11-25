import TopQuotes from "./components/top-quotes";

export const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>

        <TopQuotes />
      </div>
    </>
  );
};

export default App;
