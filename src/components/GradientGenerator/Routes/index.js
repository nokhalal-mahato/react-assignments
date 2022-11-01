import { Component } from "react";
import GradientColorPicker from "../Components/GradientColorPicker";
import GradientDirectionItem from "../Components/GradientDirectionItem";
import gradientList from "../Constants/gradientDirectionList";
import {
  GradientDirectionContainer,
  GradientGeneratorPage,
  GradientHeading,
  GradientSubHeading,
} from "./styleComponent";

class GradientGenerator extends Component {
  state = {
    color1: "#8ae323",
    color2: "#014f7b",
    selectedDirection: gradientList[0].value,
  };
  onSelectDirection = (item) => {
    this.setState({ selectedDirection: item.value });
  };
  onGenrategradient=(color1,color2)=>{
    console.log(color1,color2);
    this.setState({color1:color1,color2:color2});
  }
  render() {
    const { color1, color2, selectedDirection } = this.state;
    return (
      <GradientGeneratorPage
        direction={selectedDirection}
        color={color1}
        colorTwo={color2}
      >
        <GradientHeading>Generate a CSS Color Gradient</GradientHeading>
        <GradientSubHeading>Choose Direction</GradientSubHeading>
        <GradientDirectionContainer>
          {gradientList.map((item) => (
            <GradientDirectionItem
              key={item.id}
              data={item}
              onSelectDirection={this.onSelectDirection}
              isActive={selectedDirection === item.value}
            />
          ))}
        </GradientDirectionContainer>
        <GradientSubHeading>Pick the Colors</GradientSubHeading>
        <GradientColorPicker onGenrategradient ={this.onGenrategradient}/>
      </GradientGeneratorPage>
    );
  }
}
export default GradientGenerator;
