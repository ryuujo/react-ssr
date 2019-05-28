import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/homepageComponent";
import About from "./pages/aboutComponent";
import Payment from "./pages/paymentComponent";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/about" exact render={props => <About {...props} />} />
        <Route path="/payment" exact render={props => <Payment {...props} />} />
      </Switch>
    );
  }
}

export default App;
