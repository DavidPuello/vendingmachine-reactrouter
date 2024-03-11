import React from "react";
import Coke from "./Coke"; 
import Water from "./Water";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/Coke">
          <Drink />
        </Route>
        <Route exact path="/Water">
          <Eat />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;