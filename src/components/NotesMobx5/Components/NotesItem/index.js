import { observer } from "mobx-react";
import { CompleteBtn, DeleteBtn, EditBtn, NotesItemContainer } from "./styledComponent";

const NotesItem=(props)=>{
    const {data}=props;

    const editHandler=()=>{
        props.editHandler(data);
    }

    const completeHandler=()=>{
        props.completeHandler(data);
    }
    const deleteHandler=()=>{
        props.deleteHandler(data.id);
    }
    return (
      <NotesItemContainer isComplete={data.isComplete}>
        <h2 data-testid="item-title">{data.title}</h2>
        <p>{data.description}</p>

        <EditBtn onClick={editHandler} data-testid="edit">
          Edit
        </EditBtn>
        <CompleteBtn isComplete={data.isComplete} onClick={completeHandler}>
          {data.isComplete ? "Incomplete" : "Complete"}
        </CompleteBtn>
        <DeleteBtn onClick={deleteHandler} data-testid="delete">
          Delete
        </DeleteBtn>
      </NotesItemContainer>
    );
}

export default observer(NotesItem);