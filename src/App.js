import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {
  const backendURL = "http://localhost:4000";

  return (
    <div className="App">
      <Nav />
      <Outlet context={backendURL} />
      <Footer />
    </div>
  );
}

export default App;
