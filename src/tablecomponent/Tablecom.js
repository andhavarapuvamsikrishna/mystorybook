import React, { Component } from "react";
import { useState } from "react";

import PropTypes from "prop-types";
import { prototype } from "enzyme-adapter-react-16";
import "./css/style.css";

function Tablecom(props) {
  
  const [tabledata] = useState(props.data);
  const [rowsPerPage] = useState(5);
  const [currentPage, setPage] = useState(1);
  if (!props.data) {
    return null;
  }
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const currentTableData = tabledata.slice(firstIndex, lastIndex);
  function handleClick(event) {
    const value = event.target.value;
    setPage(value);
  }
  
  const renderCurrentTableData = currentTableData.map(function (item, index) {
    return (
      <tr
        data-test="tr"
        key={index}
        style={{ color: props.bodyfontcolor }}
        onMouseOver={handle1}
        onMouseOut={handle2}
      >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.qualification}</td>
        <td>{item.rating}</td>
      </tr>
    );
  });
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tabledata.length / rowsPerPage); i++) {
    pageNumbers.push(i);
    //console.log(pageNumbers)
  }
  const renderPageNumbers = pageNumbers.map((item, index) => {
    return (
      <li key={index} value={item} onClick={handleClick}>
        {item}
      </li>
    );
  });
  
  function handle1(event) {
    console.log(event.target);
    event.target.style.background = props.hovercolor;
  }
  function handle2(event) {
    event.target.style.background = props.bodybackground;
  }
  let ar = props.headers.map(function (item, index) {
    return (
      <th
        style={{
          background: props.headerbackground,
          color: props.headerfontcolor,
        }}
        data-test="th"
        key={index}
      >
        {item.title}
      </th>
    );
  });
  let br = props.data.map(function (item, index) {
    return (
      <tr
        data-test="tr"
        style={{ color: props.bodyfontcolor }}
        key={index}
        onMouseOver={handle1}
        onMouseOut={handle2}
      >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.qualification}</td>
        <td>{item.rating}</td>
      </tr>
    );
  });

  return (
    <div>
      <table data-test="nann" style={{ width: props.width }} id="students">
        <thead data-test="thead">
          <tr>{ar}</tr>
        </thead>
        <tbody data-test="tbody" style={{ background: props.bodybackground }}>
          {renderCurrentTableData}
        </tbody>
      </table>
      <div className="pagenos">{renderPageNumbers}</div>
    </div>
  );
}

Tablecom.propTypes = {
  width: PropTypes.string,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.nuber,
      qualification: PropTypes.string,
      rating: prototype.number,
    })
  ),
};
export default Tablecom;
