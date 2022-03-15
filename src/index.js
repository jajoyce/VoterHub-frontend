import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Reps from "./routes/Reps";
import VoterInfo from "./routes/VoterInfo";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import UserUpdate from "./routes/UserUpdate";
import UserDelete from "./routes/UserDelete";
import RepsList from "./components/RepsList";
import RepShow from "./components/RepShow";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="representatives" element={<Reps />}>
          <Route index element={<RepsList />} />
          <Route path=":id" element={<RepShow />} />
        </Route>
        <Route path="voter-info" element={<VoterInfo />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="account" element={<UserUpdate />} />
        <Route path="account-delete" element={<UserDelete />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
