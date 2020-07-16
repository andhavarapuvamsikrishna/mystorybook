import React, { Component } from "react";
import table from "./table.css"
class Tablecom extends Component {
  constructor() {
    super();
    this.state = {
       
    };
  }
  
  render() {
    let ar=this.props.headers.map(function(item)
    {
        
        return (<th>{item.title}</th>)
    })
    let br=this.props.data.map(function(item)
    {
        return(<tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.qualification}</td>
                  <td>{item.rating}</td>
               </tr>)
    })
 
    return (
             <div>
                 <table style={{width:this.props.width}} id="students">
                     <thead>
                         <tr>
                            {ar}
                         </tr>
                     </thead>
                     <tbody>
                       {br}
                     </tbody>
                 </table>
             </div>
        )
  }
}

export default Tablecom;
