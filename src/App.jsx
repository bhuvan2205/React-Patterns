import UserInfo from "./components/user-info";
import WithLoader from "./components/with-loader";

const UserWithLoader = WithLoader(UserInfo);

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>
        <UserWithLoader
          user={{
            username: "John Doe",
            age: 30,
            title: "SDE",
          }}
        />
      </div>
    </>
  );
};

export default App;
