import { useState } from "react";
import {
    Description,
  Heading,
  Image,
  ImageContainer,
  ReadBtn,
  ReadMorePage,
} from "./styledComponent";

const ReadMore = () => {
  const [readMore, setReadMore] = useState(false);
  const data =
    "Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by side with existing code so you can adopt them gradually.";
  const toggleReadMore = () => {
    setReadMore(prevData => !prevData);
  };
  return (
    <ReadMorePage>
      <Heading>React Hooks</Heading>
      <p>Hooks are new addition to React</p>
      <ImageContainer>
        <Image src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png" />
      </ImageContainer>
      <Description>{readMore ? data : data.slice(0, 170)}</Description>
      <ReadBtn onClick={toggleReadMore}>
        {readMore ? "Read Less" : "Read More"}
      </ReadBtn>
    </ReadMorePage>
  );
};

export default ReadMore;
