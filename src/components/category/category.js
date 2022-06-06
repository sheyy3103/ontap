import React from "react";
import clsx from "clsx";
import style from "./category.module.css";
import ItemCategory from "./imtemCategory";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category:[
                {id:1,name:'Name: Sheyy',status:false},
                {id:2,name:'Age: 18',status:false},
                {id:3,name:'Gender: Male',status:false},
                {id:4,name:'Location: Ha Noi',status:false},
            ]
        }
    }
    itemActive(key){
        let _state = this.state.category;
        _state.map((item) => {
            item.status = false;
            }
        )
        _state[key].status = !_state[key].status;
        this.setState({
            category: _state
            }
        )
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.state.category.map((item,key) =>{
                            // return<li key={key} className={clsx({[style.active]:item.status})} onClick={(e) => this.itemActive(key,e)}>{item.name}</li>
                            return <ItemCategory key = {key} data = {item} clickHandle = {(e) => this.itemActive(key,e)} />
                            }
                        )
                    }
                </ul>
            </div>
         );
    }
}
 
export default Category;