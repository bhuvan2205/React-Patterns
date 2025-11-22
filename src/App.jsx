import { useEffect } from "react";
import UserList from "./components/UserList";
import { API_STATUS } from "./constants/apiStatus";
import { useFetchUsers } from "./hooks/useFetchUsers";

const App = () => {
  const { users, status, getUsers } = useFetchUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Design Patterns - API Layer</h1>

        <UserList
          users={users}
          isLoading={status === API_STATUS.LOADING}
          isSuccess={status === API_STATUS.SUCCESS}
        />
      </div>
    </>
  );
};

export default App;
