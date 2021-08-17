import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./App.css";
import { Router } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/page1">Page1</Link>
        <br></br>
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
