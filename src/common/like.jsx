
import React, { Component } from 'react';

class Like extends Component {
    render() { 
        let classes = 'fa fa-heart'
        // if  (this.props.like === true ? "fa fa-heart-o" : "fa fa-heart")
         if (!this.props.liked)  classes +='-o';
        return (
           <React.Fragment>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" 
                rel="stylesheet"/>
                <i onClick = {this.props.onClick}
                style = {{cusor: 'pointer'} }
                className= {classes} aria-hidden="true"></i>
                
                
            </React.Fragment>
          );
    }
}
 
export default  Like;