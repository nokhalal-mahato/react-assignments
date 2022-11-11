import { action, observable } from "mobx";
import filterList from "../Constants/filterList";
import noteItemStore from "./noteItemStore";

class noteStore {
  @observable notesList = [];
  @observable title = "";
  @observable description = "";
  @observable edit = false;
  @observable editItem = {};
  @observable activeTab = filterList[0].id;

  @action addNotes() {
    if (this.edit) {
        const note = this.notesList.find((item) => item.id == id);
        note.setTitle(this.title);
        note.setDescription(this.description);
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

  @action setEdit() {
    this.edit = !this.edit;
  }
  @action setEditItem(data) {
    this.editItem = data;
  }
  @action setActiveTab(id) {
    this.activeTab = id;
  }

  @action deleteNote(id) {
    this.notesList = this.notesList.filter((item) => item.id !== id);
  }

  @action setCompleteNote(id) {
    const note = this.notesList.find((item) => item.id == id);
    note.setComplete();
  }
}

export default new noteStore();
