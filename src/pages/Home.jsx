import { createStyles, withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = () =>
  createStyles({
    linksBtnsCabecarioStyle: {
      '&:hover': {
        textDecoration: 'none',
      },
    },
  });

class Home extends Component {
  constructor() {
    super();
    this.state = { dia: 'Bom dia' };
  }

  render() {
    // const { classes } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    return <p>{this.state.dia}</p>;
  }
}

export default withStyles(styles)(Home);
