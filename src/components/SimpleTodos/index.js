import { Component } from "react";
import './index.css';
import TodoItem from "./TodoItem";

const todosList=[
    {id:'id1',text:"Full the learning platform amd complete react 1"},
    {id:'id2',text:"Full the learning platform amd complete react 2"},
    {id:'id3',text:"Full the learning platform amd complete react 3"},
    {id:'id4',text:"Full the learning platform amd complete react 4"},
    {id:'id5',text:"Full the learning platform amd complete react 5"},
    {id:'id6',text:"Full the learning platform amd complete react 6"},
];
class SimpleTodos extends Component{
    state={todoList:todosList};

    deleteTodo=(id)=>{
        const filteredTodoList=this.state.todoList.filter((item)=>item.id!==id);
        this.setState({todoList:filteredTodoList});
    }

    render(){
        const {todoList}=this.state;
        return(
            <div className="todos-page">
                <div className="todos-content">
                    <h1 className="todo-header">Simple Todos</h1>
                    <div className="todo-container">
                        {todoList.map((item)=>(<TodoItem key={item.id} id={item.id} deleteTodo={this.deleteTodo} text={item.text}/>))}

                    </div>
                </div>
            </div>
        )
    };
}
export default SimpleTodos;