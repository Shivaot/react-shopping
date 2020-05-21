import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/Shoppage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
