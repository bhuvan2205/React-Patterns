import Buttons from "./components/buttons";
import DisplayCount from "./components/display-count";
import { ContextProvider } from "./context/context-provider";

const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <ContextProvider>
        <div className="flex flex-col gap-4 items-center justify-center">
          <DisplayCount />
          <Buttons />
        </div>
      </ContextProvider>
    </main>
  );
};

export default App;
