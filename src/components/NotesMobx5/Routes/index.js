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
import filterList from "../Constants/filterList";
import FilterItem from "../Components/filterItem";
import noteStore from "../Store/notesStore";
import { observer } from "mobx-react"

const NotesMobx5 = observer(() => {
  const notesStore=noteStore;
  const {activeTab,notesList}=notesStore;
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
    notesStore.setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    notesStore.setDescription(event.target.value);
  };
  const deleteHandler = (id) => {
    notesStore.deleteNotes(id);
  };
  const completeHandler = (id) => {
    notesStore.setCompleteNote(id)
  };
  const editHandler=(data)=>{
      notesStore.setEdit(true);
      notesStore.setTitle(data.title);
      notesStore.setEditItem(data);
      notesStore.setDescription(data.description);
  }

  const onSelectFilter=(id)=>{
    notesStore.setActiveTab(id);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    notesStore.addNotes();
  };

  return (
    <NotesPage>
      <Heading>Notes</Heading>
      <InputForm onSubmit={onSubmitHandler}>
        <TitleInput
          value={notesStore.title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <Notedescription
          value={notesStore.description}
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
            <FilterItem
              key={item.id}
              data={item}
              isActive={activeTab === item.id}
              onSelectFilter={onSelectFilter}
            />
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
});

export default NotesMobx5;
