// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
  const backendURL = "http://localhost:4000";

  const [address, setAddress] = useState("123 Main St, Kansas City, MO 64105");

  return (
    <div className="App">
      <Header />
      <Outlet context={[backendURL, address, setAddress]} />
      <Footer />
    </div>
  );
}

export default App;
