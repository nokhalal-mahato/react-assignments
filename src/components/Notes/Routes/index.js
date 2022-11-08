import { useState } from "react";
import NotesItem from "../Components/NotesItem";
import {
  AddBtn,
  EmptyContainer,
  EmptyHeading,
  EmptyImage,
  EmptyText,
  FilterListContainer,
  Heading,
  InputForm,
  Notedescription,
  NotesContainer,
  NotesPage,
  TitleInput,
} from "./styledComponent";
import { v4 as uuidv4 } from "uuid";
import filterList from "../Constants/filterList";
import FilterItem from "../Components/filterItem";

const Notes = () => {
  const [notesList, setNotesList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [activeTab, setActiveTab] = useState(filterList[0].id);

  let filterlist=[];
  if(activeTab==='All'){
    filterlist=notesList;
  }
  else if(activeTab=='Completed'){
    filterlist = notesList.filter((item) => item.isComplete === true);
    console.log(filterlist);
  }
  else{
    filterlist = notesList.filter((item) => item.isComplete === false);
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const deleteHandler = (id) => {
    setNotesList((prevData) => prevData.filter((item) => item.id !== id));
  };
  const completeHandler = (id) => {
    setNotesList((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      })
    );
  };
  const editHandler=(data)=>{
      setEdit(true);
      setTitle(data.title);
      setEditItem(data);
      setDescription(data.description);
  }

  const onSelectFilter=(id)=>{
    setActiveTab(id);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(edit){
      setNotesList((prevData)=>prevData.map(item=>{
        if(item.id===editItem.id){
          return {...item,title:title,description:description};
        }
        return item;
      }))
    }
    else{
      const notes = {
        id: uuidv4(),
        title: title,
        description: description,
        isComplete: false,
      };
      setNotesList((prevData) => [...prevData, notes]);
    }
    
    setTitle("");
    setDescription("");
  };

  return (
    <NotesPage>
      <Heading>Notes</Heading>
      <InputForm onSubmit={onSubmitHandler}>
        <TitleInput
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <Notedescription
          value={description}
          rows="4"
          onChange={onChangeDescription}
          placeholder="Take a Note"
        />
        <AddBtn>Add</AddBtn>
      </InputForm>
      {notesList.length === 0 && (
        <EmptyContainer>
          <EmptyImage src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyText>Notes you add appear here</EmptyText>
        </EmptyContainer>
      )}
      {notesList.length > 0 && (
        <FilterListContainer>
          {filterList.map((item) => (
            <FilterItem key={item.id} data={item} isActive={activeTab===item.id}onSelectFilter={onSelectFilter} />
          ))}
        </FilterListContainer>
      )}
      {notesList.length > 0 && (
        <NotesContainer>
          {filterlist.map((item) => (
            <NotesItem
              key={item.id}
              data={item}
              deleteHandler={deleteHandler}
              completeHandler={completeHandler}
              editHandler={editHandler}
            />
          ))}
        </NotesContainer>
      )}
    </NotesPage>
  );
};

export default Notes;
