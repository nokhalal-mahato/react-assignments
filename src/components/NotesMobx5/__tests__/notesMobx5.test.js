import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import NotesMobx5 from "../Routes";


afterEach(cleanup);

test('to check notes component render',()=>{
    render(<NotesMobx5/>)
    const addBtn = screen.getByTestId("Add-btn");
    expect(addBtn).toBeInTheDocument();
});

test("on starting empty container should be there ", () => {
  render(<NotesMobx5 />);
  const emptyContainer = screen.getByTestId("empty-container");
  expect(emptyContainer).toBeInTheDocument();
});

test("empty input does not add notes in list ", () => {
  render(<NotesMobx5 />);
  const emptyContainer = screen.getByTestId("empty-container");
  const addBtn = screen.getByTestId("Add-btn"); 
  fireEvent.click(addBtn);
  expect(emptyContainer).toBeInTheDocument();
});
test("empty title does not add notes in list ", () => {
  render(<NotesMobx5 />);
  const emptyContainer = screen.getByTestId("empty-container");
  const addBtn = screen.getByTestId("Add-btn");
  const descriptionInput = screen.getByTestId("descriptionInput");
  fireEvent.change(descriptionInput,{target:{value:"nokhalal"}})
  fireEvent.click(addBtn);
  expect(emptyContainer).toBeInTheDocument();
});

test("empty description add notes in list ", () => {
  render(<NotesMobx5 />);
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
  render(<NotesMobx5 />);
  const addBtn = screen.getByTestId("Add-btn");
  const titleInput = screen.getByTestId("titleInput");
  const descriptionInput = screen.getByTestId("descriptionInput");
  fireEvent.change(descriptionInput, { target: { value: "nokhalal" } });
  fireEvent.change(titleInput, { target: { value: "nokhalal" } });
  fireEvent.click(addBtn);
  const itemTitle = screen.getAllByTestId("item-title");
  expect(itemTitle[0].textContent).toBe("nokhalal");
});


