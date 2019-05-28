import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Home extends Component {
  exampleMethod() {
    console.log("JS is running");
  }

  head(){
    return (
      <Helmet>
        <title>My Page Title</title>
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        <h1>My Homepage</h1>
        <p>Some content</p>
        <button onClick={() => this.exampleMethod()}>
          Console.log some text
        </button>
      </div>
    );
  }
}

export default Home;
