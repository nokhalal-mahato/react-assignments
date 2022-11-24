import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import LoginFormStore from "../Stores/LoginFormStore";

const store = LoginFormStore;

afterEach(cleanup);
beforeEach(() => {
  render(
    <BrowserRouter>
      <LoginForm LoginFormStore={LoginFormStore} />
    </BrowserRouter>
  );
});

test("checking login input", () => {
  store.setUserName("nokhalal");
  expect(store.username).toBe("nokhalal");
  store.setPassword("nokhalal");
  expect(store.password).toBe("nokhalal");
  store.setErrorMsg("nokhalal");
  expect(store.error_msg).toBe("nokhalal");
});

test("integrating test between store and component", () => {
  const titleInput = screen.getByPlaceholderText("Username");
  fireEvent.change(titleInput, { target: { value: "nokhalal" } });
  expect(store.username).toBe("nokhalal");
  const PasswordInput = screen.getByPlaceholderText("Password");
  fireEvent.change(PasswordInput, { target: { value: "nokhalal" } });
  expect(store.password).toBe("nokhalal");
});
test('login form layout',()=>{
  const button =screen.getAllByRole('button');
  expect(button.length).toBe(1);  
})
