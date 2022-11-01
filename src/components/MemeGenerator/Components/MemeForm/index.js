import { Component } from "react";
import {
  Button,
  Input,
  InputLable,
  MemeGeneratorForm,
  MemeGeneratorFormContainer,
  Select,
} from "./styledComponent";

class MemeForm extends Component {
  state = { imageUrl: "", topText: "", bottomText: "", fontSize: 8 };
  imageUrlInputHandler = (event) => {
    this.setState({ imageUrl: event.target.value });
  };
  topTextInputHandler = (event) => {
    this.setState({ topText: event.target.value });
  };
  bottomTextInputHandler = (event) => {
    this.setState({ bottomText: event.target.value });
  };
  fontSizeInputHandler = (event) => {
    this.setState({ fontSize: event.target.value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("hi");
    const { imageUrl, topText, bottomText, fontSize } = this.state;
    this.props.onSubmit(imageUrl, topText, bottomText, fontSize);
  };
  render() {
    const { imageUrl, topText, bottomText, fontSize } = this.state;
    return (
      <MemeGeneratorFormContainer>
        <MemeGeneratorForm onSubmit={this.onSubmitHandler}>
          <InputLable>Image URL</InputLable>
          <Input
            type="url"
            placeholder="Enter the Image URL"
            value={imageUrl}
            onChange={this.imageUrlInputHandler}
            required
          />
          <InputLable>Top Text</InputLable>
          <Input
            type="text"
            value={topText}
            placeholder="Enter the Top Text"
            onChange={this.topTextInputHandler}
          />
          <InputLable>Bottom Text</InputLable>
          <Input
            type="text"
            value={bottomText}
            placeholder="Enter the Bottom Text"
            onChange={this.bottomTextInputHandler}
          />
          <InputLable>Font Size</InputLable>
          <Select onChange={this.fontSizeInputHandler}>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="32">32</option>
          </Select>
          <Button type="submit">Generate</Button>
        </MemeGeneratorForm>
      </MemeGeneratorFormContainer>
    );
  }
}
export default MemeForm;
