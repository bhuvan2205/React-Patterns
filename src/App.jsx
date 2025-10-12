import ResourceLoaderWithRender from "./components/resource-loader-with-render";
import UserInfo from "./components/user-info";
import { fetchRandomUser } from "./data/user";

function App() {
  return (
    <main className="container mx-auto">
      <h1>Container Component Pattern</h1>

      <div className="grid grid-cols-3">
        <div>
          <ResourceLoaderWithRender
            getData={fetchRandomUser}
            render={(resource) => <UserInfo user={resource} />}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
