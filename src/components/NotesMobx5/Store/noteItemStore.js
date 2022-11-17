import { action,computed,observable } from "mobx";
import {v4 as uuidv4} from 'uuid';

class noteItemStore {
  id = uuidv4();
  @observable isComplete = false;
  @observable title = "";
  @observable description = "";
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  @action setComplete() {
    this.isComplete = !this.isComplete;
  }
  @action setTitle(value) {
    this.title = value;
  }

  @action setDescription(value) {
    this.description = value;
  }
}

export default noteItemStore;