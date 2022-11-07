import { NotesItemContainer } from "./styledComponent";

const NotesItem=(props)=>{
    const {data}=props;
    return(
        <NotesItemContainer>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </NotesItemContainer>
    )
}

export default NotesItem;