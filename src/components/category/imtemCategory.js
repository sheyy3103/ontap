import React from "react";
import clsx from "clsx";
import style from "./category.module.css";


class ItemCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <li onClick = {this.props.clickHandle} className = {clsx({[style.active]:this.props.data.status})}>{this.props.data.name}</li>
         );
    }
}
 
export default ItemCategory;