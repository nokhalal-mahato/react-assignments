import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import NotesMobx5 from "../Routes";
import obj1 from "../Store/notesStore";

afterEach(()=>cleanup());

test("to check notes component render", () => {
  const store = obj1;
  render(<NotesMobx5 notesStore={obj1} />);
  const addBtn = screen.getByTestId("Add-btn");
  fireEvent.click(addBtn);
  expect(store.notesList.length).toBe(0);
});
test("testing user input", () => {
  const store = obj1;
  render(<NotesMobx5 notesStore={obj1} />);
  const titleInput = screen.getByTestId("titleInput");
  fireEvent.change(titleInput, { target: { value: "nokhalal" } });
  expect(store.title).toBe("nokhalal");
  const descriptionInput = screen.getByTestId("descriptionInput");
  fireEvent.change(descriptionInput, { target: { value: "mahato" } });
  expect(store.description).toBe("mahato");
});
test("adding notes", () => {
  const store = obj1;
  render(<NotesMobx5 notesStore={obj1} />);
  const titleInput = screen.getByTestId("titleInput");
  fireEvent.change(titleInput, { target: { value: "nokhalal" } });
  expect(store.title).toBe("nokhalal");
  const descriptionInput = screen.getByTestId("descriptionInput");
  fireEvent.change(descriptionInput, { target: { value: "mahato" } });
  expect(store.description).toBe("mahato");
  const addBtn = screen.getByTestId("Add-btn");
  fireEvent.click(addBtn);
  expect(store.notesList.length).toBe(1);
});
test("deleting notes", () => {
  const store = obj1;
  store.notesList = [];
  render(<NotesMobx5 notesStore={obj1} />);
  const titleInput = screen.getByTestId("titleInput");
  fireEvent.change(titleInput, { target: { value: "nokhalal" } });
  expect(store.title).toBe("nokhalal");
  const descriptionInput = screen.getByTestId("descriptionInput");
  fireEvent.change(descriptionInput, { target: { value: "mahato" } });
  expect(store.description).toBe("mahato");
  const addBtn = screen.getByTestId("Add-btn");
  fireEvent.click(addBtn);
  const deleteBtn = screen.getAllByTestId("delete");
  fireEvent.click(deleteBtn[0]);
  expect(store.notesList.length).toBe(0);
});
test('testing edit function',()=>{
    const store = obj1;
    store.notesList = [];
    render(<NotesMobx5 notesStore={obj1} />);
    const titleInput = screen.getByTestId("titleInput");
    fireEvent.change(titleInput, { target: { value: "nokhalal" } });
    expect(store.title).toBe("nokhalal");
    const descriptionInput = screen.getByTestId("descriptionInput");
    fireEvent.change(descriptionInput, { target: { value: "mahato" } });
    expect(store.description).toBe("mahato");
    const addBtn = screen.getByTestId("Add-btn");
    fireEvent.click(addBtn);
    const editBtn = screen.getByTestId("edit");
    fireEvent.click(editBtn);
    fireEvent.change(descriptionInput, { target: { value: "nk" } });
    fireEvent.change(titleInput, { target: { value: "mahato" } });
    fireEvent.click(addBtn);
    expect(store.notesList[0].title).toBe("mahato");
    expect(store.notesList[0].description).toBe("nk");
})
