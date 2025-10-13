const UserInfo = (props) => {
  console.log(props)
  const { username, age, title } = props?.user || {};
  return (
    <div className="bg-yellow-200 my-3 w-[300px] p-4 rounded-3xl">
      <h2 className="text-2xl">Name: {username ?? ""}</h2>
      <p>Age: {age ?? 0}</p>
      <p>Title: {title ?? ""}</p>
    </div>
  );
};

export default UserInfo;