import { Component } from "react";
import {
  GradientColorPickerText,
  GradientColorPickerContainer,
  GradientColorPickerItem,
  GradientColorPickerPage,
  GradientColorPickerColor,
  GenerateBtn,
} from "./styleComponent";

class GradientColorPicker extends Component {
  state = {
    color1: "#8ae323",
    color2: "#014f7b",
  };

  onColor1Change = (event) => {
    this.setState({ color1: event.target.value });
  };
  onColor2Change = (event) => {
    this.setState({ color2: event.target.value });
  };
  onClickGenerate=()=>{
    const { color1, color2 } = this.state;
    this.props.onGenrategradient(color1,color2);
  }
  render() {
    const { color1, color2 } = this.state;
    return (
      <GradientColorPickerPage>
        <GradientColorPickerContainer>
          <GradientColorPickerItem>
            <GradientColorPickerText>{color1}</GradientColorPickerText>
            <GradientColorPickerColor
              value={color1}
              onChange={this.onColor1Change}
              type="color"
            />
          </GradientColorPickerItem>
          <GradientColorPickerItem>
            <GradientColorPickerText>{color2}</GradientColorPickerText>
            <GradientColorPickerColor
              value={color2}
              onChange={this.onColor2Change}
              type="color"
            />
          </GradientColorPickerItem>
        </GradientColorPickerContainer>
        <GenerateBtn onClick={this.onClickGenerate}>Generate</GenerateBtn>
      </GradientColorPickerPage>
    );
  }
}
export default GradientColorPicker;
