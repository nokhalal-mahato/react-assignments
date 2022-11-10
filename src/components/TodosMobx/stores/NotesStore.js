import { makeAutoObservable } from "mobx";
import filterList from "../Constants/filterList";

class notesStore {
  notesList = [];
  edit = false;
  editItem = {};
  activeTab = filterList[0].id;
  title = "";
  description = "";

  constructor() {
    makeAutoObservable(this);
    this.activeTab = filterList[0].id;
  }
  setTitle(newTitle) {
    this.title = newTitle;
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  deleteNotes(id){
    this.notesList = this.notesList.filter((item) => item.id !== id);
  }
  selectFilter(id){
    this.activeTab=id;
  }
  toggleCompleteTask(id){
    this.notesList = this.notesList.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
  }
  editNotes(data){
    this.edit = true;
    this.title = data.title;
    this.editItem = data;
    this.description = data.description;
  }
  addNotes(notes){
    this.notesList.push(notes);
  }
}

export default new notesStore();