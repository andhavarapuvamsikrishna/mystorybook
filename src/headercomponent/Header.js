import React, { Component } from "react";
import header from "./header.css";

class App extends Component {
  render() {
    return (
      <div className="Header" data-test="Header">
        <h1 className="wrap" data-test="wrap">Test</h1>
        <img className="logoimg" data-test="logoimg" src="https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_1280.jpg"  height="50px" width="70%"/>
      </div>
    );
  }
}

export default App;
