import { useEffect } from "react";
import UserList from "./components/UserList";
import { useFetchUsers } from "./hooks/useFetchUsers";

const App = () => {
  const { users, getUsers, isLoading, isSuccess, isError } = useFetchUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Design Patterns - API Layer</h1>

        <UserList
          users={users}
          getUsers={getUsers}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </div>
    </>
  );
};

export default App;
