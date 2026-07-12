import NavBar from "./components/NavBar";
import Login from "./components/Login";
import TaskManager from "./components/TaskManager";
import { useSelector } from "react-redux";

export default function App() {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);

  return (
    <div>
      <NavBar />
      {!isLoggedIn && <Login />}
      {isLoggedIn && <TaskManager />}
    </div>
  );
}