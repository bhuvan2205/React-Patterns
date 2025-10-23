import { useState } from "react";
import Counter from "./components/counter";

const App = () => {
  const [isShirt, setIsShirt] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>

        <div>
          {isShirt ? (
            <>
              <span>Shirt Count:</span>
              <Counter keys={"shirt"} />
            </>
          ) : (
            <>
              <span>Shoes Count:</span>
              <Counter keys={"shoes"} />
            </>
          )}
        </div>

        <button
          onClick={() => setIsShirt(!isShirt)}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          {isShirt ? "Show Shoes" : "Show Shirt"}
        </button>
      </div>
    </>
  );
};

export default App;
