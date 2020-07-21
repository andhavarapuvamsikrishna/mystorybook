import React, { Component } from "react";
import Tablecom from "./Tablecom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      headers: [
        { title: "Id" },
        { title: "Name" },
        { title: "Age" },
        { title: "Qualification" },
        { title: "Rating" },
      ],
      data: [
        { id: 1, name: "a", age: 29, qualification: "B.Com", rating: 3 },
        { id: 2, name: "b", age: 35, qualification: "B.Sc", rating: 5 },
        { id: 3, name: "c", age: 42, qualification: "B.E", rating: 3 },
        { id: 4, name: "a", age: 29, qualification: "B.tech", rating: 2 },
        { id: 5, name: "a", age: 29, qualification: "B.arch", rating: 1 ,something:200},
        { id: 6, name: "a", age: 29, qualification: "B.Com", rating: 5 },
        { id: 7, name: "a", age: 29, qualification: "B.Com", rating: 3 },
        { id: 8, name: "b", age: 35, qualification: "B.Sc", rating: 5 },
        { id: 9, name: "c", age: 42, qualification: "B.E", rating: 3 },
        { id: 10, name: "a", age: 29, qualification: "B.tech", rating: 2 },
        { id: 11, name: "a", age: 29, qualification: "B.arch", rating: 1 },
        { id: 12, name: "a", age: 29, qualification: "B.Com", rating: 5 },
        { id: 13, name: "x", age: 35, qualification: "B.Sc", rating: 5 },
        { id: 14, name: "y", age: 42, qualification: "B.E", rating: 3 },
        { id: 15, name: "a", age: 29, qualification: "B.tech", rating: 2 },
        { id: 16, name: "b", age: 29, qualification: "B.arch", rating: 1 },
        { id: 17, name: "j", age: 29, qualification: "B.Com", rating: 5 },
      ],
      field: 1,
    };
  }

  render() {
    return (
      <Tablecom
        key={this.state.field}
        headers={this.state.headers}
        data={this.state.data}
        width="100%"
        bodybackground="#ddd"
        headerbackground="steelblue"
        bodyfontcolor="blue"
        headerfontcolor="black"
        hovercolor="lightblue"
        buttonb="black"
      />
    );
  }
}
export default App;
