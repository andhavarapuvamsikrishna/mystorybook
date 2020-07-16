import React, { Component } from "react";
import table from "./table.css"
class Tablecom extends Component {
  constructor() {
    super();
    this.state = {
       
    };
  }
  
  render() {
    if(!this.props.headers){
      return null
    }
    let ar=this.props.headers.map(function(item,index)
    {
        
        return (<th data-test="th" key={index}>{item.title}</th>)
    })
    let br=this.props.data.map(function(item,index)
    {
        return(<tr data-test="tr" key={index} >
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.qualification}</td>
                  <td>{item.rating}</td>
               </tr>)
    })    
 
    return (
             <div>
                 <table data-test ="nann" style={{width:this.props.width}} id="students">
                     <thead data-test="thead">
                         <tr>
                            {ar}
                         </tr>
                     </thead>
                     <tbody data-test="tbody">
                       {br}
                     </tbody>
                 </table>
             </div>
        )
  }
}

export default Tablecom;
