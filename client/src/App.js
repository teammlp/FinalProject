import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
   //  <Router>
      <div>
        <Nav />
        {/* <Switch> */}
          {/* <Route exact path="/" component={HomePage} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/users/register" component={Register} /> */}
          
        {/* </Switch> */}
      </div>
   //  </Router>
  );
}

export default App;
