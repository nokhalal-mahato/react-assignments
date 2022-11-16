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
  Header,
  Select
} from "./styledComponent";
import filterList from "../Constants/filterList";
import FilterItem from "../Components/filterItem";
import noteStore from "../Store/notesStore";
import { observer } from "mobx-react"
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const NotesI18n = observer(() => {
  const {t,i18n}=useTranslation();
  const notesStore=noteStore;
  const {activeTab,notesList}=notesStore;
  let filterlist=[];
  if(activeTab==='All'){
    filterlist=notesList;
  }
  else if(activeTab=='Completed'){
    filterlist = notesList.filter((item) => item.isComplete === true);
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
  const completeHandler = (data) => {
    data.setComplete();
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
  const onChangeLanguage=(event)=>{
    i18n.changeLanguage(event.target.value);
  }
  return (
    <NotesPage>
      <Header>
        <Heading>{t("page_title")}</Heading>
        <Select onChange={onChangeLanguage}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </Select>
      </Header>

      <InputForm onSubmit={onSubmitHandler}>
        <TitleInput
          value={notesStore.title}
          onChange={onChangeTitle}
          placeholder={t("title")}
        />
        <Notedescription
          value={notesStore.description}
          rows="4"
          onChange={onChangeDescription}
          placeholder={t("take_note")}
        />
        <AddBtn>{t("add")}</AddBtn>
      </InputForm>
      {notesList.length === 0 && (
        <EmptyContainer>
          <EmptyImage src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" />
          <EmptyHeading>{t("empty_title")}</EmptyHeading>
          <EmptyText>{t("empty_text")}</EmptyText>
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

export default NotesI18n;
