import PostInfo from "./components/post-info";
import ResourceLoader from "./components/resource-loader";
import UserInfo from "./components/user-info";
import UserLoader from "./components/user-loader";
import { API_ENDPOINTS } from "./constants/endpoints";

function App() {
  return (
    <main className="container mx-auto">
      <h1>Container Component Pattern</h1>

      <div className="grid grid-cols-3">
        <div>
          <ResourceLoader
            resourceUrl={`${API_ENDPOINTS.USERS}/1`}
            resourceName="user"
          >
            <UserInfo />
          </ResourceLoader>
        </div>
        <div>
          <ResourceLoader
            resourceUrl={`${API_ENDPOINTS.POSTS}/1`}
            resourceName="post"
          >
            <PostInfo />
          </ResourceLoader>
        </div>
      </div>
    </main>
  );
}

export default App;
