import { action, computed, observable, reaction, toJS } from "mobx";
import { toast } from "react-toastify";
import filterList from "../Constants/filterList";
import noteItemStore from "./noteItemStore";

class noteStore {
  @observable notesList = [];
  @observable title = "";
  @observable description = "";
  @observable edit = false;
  @observable editItem = {};
  @observable activeTab = filterList[0].id;
  @observable notesLength= 0;

  constructor(){
        reaction(
          () => this.notesList.length,
          (notesList,oldNotesList,reaction) => {
            console.log(notesList,oldNotesList,reaction);
            if (notesList > this.notesLength) {
              this.setNotesLength(1);
              toast("New Notes Added");
            }
            if (notesList < this.notesLength) {
              this.setNotesLength(-1);
              toast("A Notes deleted");
            }
          }
        );
  }
  @action setNotesLength(value){
    this.notesLength=this.notesLength +value
  }
  @computed get filterList() {
    let Filterlist = [];
    if (this.activeTab === "All") {
      Filterlist = this.notesList;
    } else if (this.activeTab == "Completed") {
      Filterlist = this.notesList.filter((item) => item.isComplete === true);
    } else {
      Filterlist = this.notesList.filter((item) => item.isComplete === false);
    }
    return Filterlist;
  }

  @action addNotes() {
    if (this.title === "" || this.description === "") {
      alert("Please enter all data");
      return;
    }
    if (this.edit) {
      const note = this.notesList.find((item) => item.id == this.editItem.id);
      console.log(note);
      note.setTitle(this.title);
      note.setDescription(this.description);
      this.setEdit(false);
    } else {
      this.notesList.push(new noteItemStore(this.title, this.description));
    }
    this.setTitle("");
    this.setDescription("");
  }

  @action setTitle(value) {
    this.title = value;
  }

  @action setDescription(value) {
    this.description = value;
  }

  @action setEdit(value) {
    this.edit = value;
  }
  @action setEditItem(data) {
    this.editItem = data;
  }
  @action setActiveTab(id) {
    this.activeTab = id;
  }

  @action deleteNotes(id) {
    this.notesList = this.notesList.filter((item) => item.id !== id);
  }

  @action setCompleteNote(id) {
    const note = this.notesList.find((item) => item.id == id);
    note.setComplete();
  }

}
const obj1 = new noteStore();


export default obj1;
