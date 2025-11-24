import UserList from "./components/UserList";
import { SearchMeal } from "./components/SearchMeal";

const App = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Design Patterns - API Layer</h1>
        <SearchMeal />
        <UserList />
      </div>
    </>
  );
};

export default App;
