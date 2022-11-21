import { render, screen } from "@testing-library/react";
import NotesMobx5 from "../Routes";

test('to check notes component render',()=>{
    render(<NotesMobx5/>)
    const addBtn = screen.getByTestId("Add-btn");
    expect(addBtn).toBeInTheDocument();
});