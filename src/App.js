// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {
  const backendURL = "http://localhost:4000";

  return (
    <div className="App">
      <Header />
      <Outlet context={backendURL} />
      <Footer />
    </div>
  );
}

export default App;
