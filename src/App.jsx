import UserInfo from "./components/user-info";
import LogProps from "./components/log-props";
import IncludeUser from "./components/include-user";

const UserInfoWrapper = LogProps(UserInfo);
const UserInfoWithUserWrapper = IncludeUser(UserInfo, 1);

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-2">Design Patterns - React</h1>
        <UserInfoWrapper
          user={{
            username: "John Doe",
            age: 30,
            address: { country: "USA" },
            company: { title: "Company" },
          }}
        />
        <UserInfoWithUserWrapper />
      </div>
    </>
  );
};

export default App;
