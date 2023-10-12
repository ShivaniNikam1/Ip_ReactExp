import React, { Component } from "react";
// import { Grid, Cell } from "react-mdl";

const Education = () => {
  return (
    <div>
      <p>
        {this.props.startYear} - {this.props.endYear}
      </p>

      <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
      <p>{this.props.schoolDescription}</p>
    </div>
  );
};

export default Education;
