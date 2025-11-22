import UserList from "./components/UserList";

const App = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Design Patterns - API Layer</h1>
        <UserList />
      </div>
    </>
  );
};

export default App;
