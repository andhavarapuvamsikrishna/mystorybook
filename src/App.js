import React, { Component } from "react";
import Tablecom from "./Tablecom";
import Header from "./components/Header"
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
        { id: 5, name: "a", age: 29, qualification: "B.arch", rating: 1 },
        { id: 6, name: "a", age: 29, qualification: "B.Com", rating: 5 },
        { id: 7, name: "a", age: 29, qualification: "B.Com", rating: 3 },
        { id: 8, name: "b", age: 35, qualification: "B.Sc", rating: 5 },
        { id: 9, name: "c", age: 42, qualification: "B.E", rating: 3 },
        { id: 10, name: "a", age: 29, qualification: "B.tech", rating: 2 },
        { id: 11, name: "a", age: 29, qualification: "B.arch", rating: 1 },
        { id: 12, name: "a", age: 29, qualification: "B.Com", rating: 5 },
      ],
      
    }
   
  }
 
  render() {
    return (
      <div>
        <Header />
        <Tablecom
          headers={this.state.headers}
          data={this.state.data}
          width="100%"
        />
      </div>
    );
  }
}
export default App;
