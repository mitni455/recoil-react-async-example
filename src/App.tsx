import "./styles.css";
import { RecoilRoot } from "recoil";
import UserList from "./components/UserList";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <a href="https://javascript.plainenglish.io/getting-to-know-recoil-initializing-and-maintaining-react-application-state-with-asynchronous-c5c3eb114c39">
          See Blog
        </a>
        <h1>Dynamic React Application State</h1>
        <h2>with Recoil / TypeScript</h2>
        <hr />
        <h3>User List</h3>
        <UserList />
      </div>
    </RecoilRoot>
  );
}
