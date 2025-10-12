import RandomUserLoader from "./components/random-user-loader";
import UserInfo from "./components/user-info";
import UserLoader from "./components/user-loader";

function App() {
  return (
    <main className="container mx-auto">
      <h1>Container Component Pattern</h1>

      <div className="grid grid-cols-3">
        <div>
          <RandomUserLoader>
            <UserInfo />
          </RandomUserLoader>
        </div>
        <div>
          <UserLoader userId={20}>
            <UserInfo />
          </UserLoader>
        </div>
      </div>
    </main>
  );
}

export default App;
