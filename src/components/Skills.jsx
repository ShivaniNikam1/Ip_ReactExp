import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

const Skills = () => {
  return (
    <Grid>
      <Cell col={12}>
        <div style={{ display: "flex" }}>
          {this.props.skill}{" "}
          <ProgressBar
            style={{ margin: "auto", width: "75%" }}
            progress={this.props.progress}
          />{" "}
        </div>
      </Cell>
    </Grid>
  );
};

export default Skills;
