import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../routers/Home";
import Detail from "../routers/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
