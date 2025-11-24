import { formatDate } from "../helpers/date";

const User = (props) => {
  const { user } = props || {};
  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <td className="p-3">
        <p>{user?.id}</p>
      </td>
      <td className="p-3">
        <p>
          {user?.firstName} {user?.lastName}
        </p>
      </td>
      <td className="p-3">
        <p>{formatDate(user?.birthDate)}</p>
      </td>
      <td className="p-3">
        <p>{user?.email}</p>
      </td>
      <td className="p-3">
        <p>{user?.phone}</p>
      </td>
      <td className="p-3 ">
        <span className="text-2xl text-center">
          {user?.gender === "male" ? "👦" : "👩"}
        </span>
      </td>
    </tr>
  );
};

export default User;
