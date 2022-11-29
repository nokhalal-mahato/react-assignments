import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import NotFound from "."

test('testing not found layout',()=>{
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const heading = screen.getByText("Page Not Found");
    expect(heading).toBeInTheDocument();
})