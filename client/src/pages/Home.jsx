import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <Outlet /> 
    </div>
  );
}

export default Home;
