import { Component } from "react";
import MemeForm from "../Components/MemeForm";
import {
  Heading,
  MemeGeneratorContainer,
  MemeGeneratorContent,
  MemeGeneratorPage,
  MemeImage,
  MemeImageContainer,
  MemeText,
} from "./styledComponent";

class MemeGenerator extends Component {
  state = {
    imageUrl: "",
    topText: "",
    bottomText: "",
    fontSize: 8,
    isShow: false,
  };
  onSubmit = (imageUrl, topText, bottomText, fontSize) => {
    this.setState({
      imageUrl: imageUrl,
      topText: topText,
      bottomText: bottomText,
      fontSize: fontSize,
      isShow: true,
    });
  };
  render() {
    const { isShow, imageUrl, topText, bottomText, fontSize } = this.state;
    return (
      <MemeGeneratorPage>
        <MemeGeneratorContent>
          <Heading>Meme Generator</Heading>
          <MemeGeneratorContainer>
            <MemeForm onSubmit={this.onSubmit} />
            {isShow ? (
              <MemeImageContainer background={imageUrl}>
                <MemeText fontSize={fontSize}>{topText}</MemeText>
                <MemeText fontSize={fontSize}>{bottomText}</MemeText>
              </MemeImageContainer>
            ) : null}
          </MemeGeneratorContainer>
        </MemeGeneratorContent>
      </MemeGeneratorPage>
    );
  }
}
export default MemeGenerator;
