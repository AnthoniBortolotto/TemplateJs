import { createStyles,withStyles } from "@material-ui/core";
import React, { Component } from "react"
import ScrollAnimation from 'react-animate-on-scroll';

const styles = (theme) => createStyles({
    linksBtnsCabecarioStyle:{
        '&:hover': {
            textDecoration: 'none'
        },
    }
})

class Home extends Component {
    state = { dia: "Bom dia" }
    
    render() { 
        const { classes } = this.props;
        return ( <p>{this.state.dia}</p> );
    }
}
 
export default withStyles(styles)(Home);