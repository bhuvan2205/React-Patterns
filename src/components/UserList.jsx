import { useFetchUsers } from "../hooks/useFetchUsers";
import { LazyLoader } from "./LazyLoader";
import User from "./User";

const UserList = () => {
  const { users, getUsers, isLoading, isSuccess, isError } = useFetchUsers();

  return (
    <div className="sm:p-4 dark:text-gray-800">
      <h2 className="mb-6 text-2xl font-semibold leading-tight flex items-center">
        <button
          onClick={getUsers}
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md cursor-pointer"
        >
          Get Users
        </button>
      </h2>

      <LazyLoader show={isLoading} delay={500} />

      {isError && <div className="text-red-500">Error fetching users</div>}
      {isSuccess && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Birth Date</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Gender</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <User key={user?.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
