import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import NotesMobx5 from "../Routes";
import obj1 from "../Store/notesStore";

beforeEach(()=>{
  render(<NotesMobx5 notesStore={obj1} />);
})
afterEach(cleanup);

test("on starting empty container should be there ", () => {
  const emptyContainer = screen.getByTestId("empty-container");
  expect(emptyContainer).toBeInTheDocument();
});

test("empty input does not add notes in list ", () => {
  const emptyContainer = screen.getByTestId("empty-container");
  const addBtn = screen.getByTestId("Add-btn"); 
  fireEvent.click(addBtn);
  expect(emptyContainer).toBeInTheDocument();
});
test("empty title does not add notes in list ", () => {
  const emptyContainer = screen.getByTestId("empty-container");
  const addBtn = screen.getByTestId("Add-btn");
  const descriptionInput = screen.getByTestId("descriptionInput");
  fireEvent.change(descriptionInput,{target:{value:"nokhalal"}})
  fireEvent.click(addBtn);
  expect(emptyContainer).toBeInTheDocument();
});

test("empty description does not add notes in list ", () => {
  const emptyContainer = screen.getByTestId("empty-container");
  const addBtn = screen.getByTestId("Add-btn");
  const titleInput = screen.getByTestId("titleInput");
  fireEvent.change(titleInput, { target: { value: "nokhalal" } });
  const descriptionInput = screen.getByTestId("descriptionInput");
  fireEvent.change(descriptionInput, { target: { value: "" } });
  fireEvent.click(addBtn);
  expect(emptyContainer).toBeInTheDocument();
});

test("adding notes in list ", () => {
  const addBtn = screen.getByTestId("Add-btn");
  const titleInput = screen.getByTestId("titleInput");
  const descriptionInput = screen.getByTestId("descriptionInput");
  fireEvent.change(descriptionInput, { target: { value: "nokhalal" } });
  fireEvent.change(titleInput, { target: { value: "nokhalal" } });
  fireEvent.click(addBtn);
  const itemTitle = screen.getAllByTestId("item-title");
  expect(itemTitle[0].textContent).toBe("nokhalal");
});


