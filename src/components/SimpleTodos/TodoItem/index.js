import { Component } from "react";
import './index.css';

class TodoItem extends Component{

    deleteTodoHandler=()=>{
        const {deleteTodo,id}=this.props;
        deleteTodo(id);
    }

    render(){
        const {id,text}=this.props;
        return(
            <div id={id} className='todo-item'>
                <p className="todo-item-text">{text}</p>
                <button className="todo-item-delete" onClick={this.deleteTodoHandler}>Delete</button>
            </div>
        );
    }
}

export default TodoItem;