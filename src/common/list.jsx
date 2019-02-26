
import React, { Component } from 'react';

class List  extends Component {
    // state = {  }
    render() { 

        const {items,valueProperty,textProperty,onItemSelect,selectedItem} = this.props
       //  const items = this.props.genres not working why?
        return ( 
            <div>
                <ul className="list-group">
                {items.map(item =>
                    <li 
                    onClick = { () => onItemSelect(item)}
                    key = {item[valueProperty]} 
                    className= {item === selectedItem? "list-group-item active" : "list-group-item"}> 
                    {item[textProperty]}
                    </li>)}    
                </ul>
            </div>
         );
    }
}
 
export default List ;