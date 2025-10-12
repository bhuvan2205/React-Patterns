const UserInfo = ({ user }) => {
  const { username, age, address, company } = user || {};
  return (
    <>
      <h2 className="text-xl">Name: {username ?? ""}</h2>
      <p>Age: {age ?? 0}</p>
      <p>Title: {company?.title ?? ""}</p>
      <p>Country: {address?.country ?? ""}</p>
    </>
  );
};

export default UserInfo;
