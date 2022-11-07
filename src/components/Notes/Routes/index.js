import { useState } from "react";
import NotesItem from "../Components/NotesItem";
import {
  AddBtn,
  EmptyContainer,
  EmptyHeading,
  EmptyImage,
  EmptyText,
  Heading,
  InputForm,
  Notedescription,
  NotesContainer,
  NotesPage,
  TitleInput,
} from "./styledComponent";
import { v4 as uuidv4 } from "uuid";

const Notes = () => {
  const [notesList, setNotesList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const notes = {
      id: uuidv4(),
      title: title,
      description: description,
    };
    setNotesList((prevData) => [...prevData, notes]);
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
          value={description} rows='4'
          onChange={onChangeDescription}
          placeholder="Take a Note"
        />
        <AddBtn>Add</AddBtn>
      </InputForm>
      {notesList.length == 0 && (
        <EmptyContainer>
          <EmptyImage src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyText>Notes you add appear here</EmptyText>
        </EmptyContainer>
      )}
      {notesList.length > 0 && (
        <NotesContainer>
          {notesList.map((item) => (
            <NotesItem key={item.id} data={item} />
          ))}
        </NotesContainer>
      )}
    </NotesPage>
  );
};

export default Notes;
