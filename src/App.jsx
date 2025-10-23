import Child from "./components/child";
import ErrorBoundary from "./components/error-boundary";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>

        <ErrorBoundary fallback={<div className="text-red-500">Something went wrong!</div>}>
          <Child />
        </ErrorBoundary>

        
      </div>
    </>
  );
};

export default App;
