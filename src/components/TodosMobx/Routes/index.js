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
import notesStore from "../stores/NotesStore";
import { observer } from "mobx-react";



const NotesMobx = observer(() => {
  const NoteStore=notesStore;
  let filterlist=[];
  if(NoteStore.activeTab==='All'){
    filterlist=NoteStore.notesList;
  }
  else if (NoteStore.activeTab === "Completed") {
    filterlist = NoteStore.notesList.filter((item) => item.isComplete === true);
  } else {
    filterlist = NoteStore.notesList.filter(
      (item) => item.isComplete === false
    );
  }
  const onChangeTitle = (event) => {
    NoteStore.setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    NoteStore.setDescription(event.target.value);
  };
  const deleteHandler = (id) => {
    NoteStore.deleteNotes(id);
  };
  const completeHandler = (id) => {
    NoteStore.toggleCompleteTask(id);
  };
  const editHandler=(data)=>{
      NoteStore.editNotes(data);
  }

  const onSelectFilter=(id)=>{
    NoteStore.selectFilter(id);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (NoteStore.title === "" && NoteStore.description === "") {
      return;
    }
    if (NoteStore.edit) {
      NoteStore.notesList = NoteStore.notesList.map((item) => {
        if (item.id === NoteStore.editItem.id) {
          return {
            ...item,
            title: NoteStore.title,
            description: NoteStore.description,
          };
        }
        return item;
      });
    } else {
      const notes = {
        id: uuidv4(),
        title: NoteStore.title,
        description: NoteStore.description,
        isComplete: false,
      };
      NoteStore.addNotes(notes);
    }
    
    NoteStore.setTitle('');
    NoteStore.setDescription('');
  };

  return (
    <NotesPage>
      <Heading>Notes</Heading>
      <InputForm onSubmit={onSubmitHandler}>
        <TitleInput
          value={NoteStore.title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <Notedescription
          value={NoteStore.description}
          rows="4"
          onChange={onChangeDescription}
          placeholder="Take a Note"
        />
        <AddBtn>Add</AddBtn>
      </InputForm>
      {NoteStore.notesList.length === 0 && (
        <EmptyContainer>
          <EmptyImage src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyText>Notes you add appear here</EmptyText>
        </EmptyContainer>
      )}
      {NoteStore.notesList.length > 0 && (
        <FilterListContainer>
          {filterList.map((item) => (
            <FilterItem
              key={item.id}
              data={item}
              isActive={NoteStore.activeTab === item.id}
              onSelectFilter={onSelectFilter}
            />
          ))}
        </FilterListContainer>
      )}
      {NoteStore.notesList.length > 0 && (
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

export default NotesMobx;
