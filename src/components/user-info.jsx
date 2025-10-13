const UserInfo = ({ user }) => {
  const { username, age, address, company } = user || {};
  return (
    <div className="bg-yellow-200 my-3 w-[300px] p-4 rounded-3xl">
      <h2 className="text-2xl">Name: {username ?? ""}</h2>
      <p>Age: {age ?? 0}</p>
      <p>Title: {company?.title ?? ""}</p>
      <p>Country: {address?.country ?? ""}</p>
    </div>
  );
};

export default UserInfo;