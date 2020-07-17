import React, { Component } from "react";
import table from "./table.css"
import PropTypes from "prop-types"
import { prototype } from "enzyme-adapter-react-16";
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
Tablecom.propTypes={
    width:PropTypes.string,
    headers:PropTypes.arrayOf(PropTypes.shape({
      title:PropTypes.string
    })),
    data:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number,
      name:PropTypes.string,
      age:PropTypes.nuber,
      qualification:PropTypes.string,
      rating:prototype.number
  
    })),
    
}
export default Tablecom;
