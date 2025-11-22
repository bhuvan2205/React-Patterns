import React from "react";
import User from "./User";
import Loader from "./Loader";

const UserList = (props) => {
  const { users, isLoading, isSuccess } = props || {};

  return (
    <div className="sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Users</h2>

      
      {isLoading && <Loader />}
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
