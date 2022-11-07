import { useState } from "react";
import {
    CardName,
  CardNameInput,
  CardNumber,
  CardNumberInput,
  CardText,
  CreditCardContainer,
  CreditCardPage,
  CreditCardSection,
  FormHeading,
  Heading,
  InputContainer,
} from "./styledComponent";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");

  const onChangeCardNumber = (event) => {
    setCardNumber(event.target.value);
  };
  const onChangeCardName = (event) => {
    setCardName(event.target.value);
  };
  return (
    <CreditCardPage>
      <CreditCardSection>
        <Heading>CREDIT CARD</Heading>
        <CreditCardContainer>
            <CardNumber>{cardNumber}</CardNumber>
            <CardText>CARDHOLDER NAME</CardText>
            <CardName>{cardName}</CardName>
        </CreditCardContainer>
      </CreditCardSection>
      <InputContainer>
        <FormHeading>Payment Method</FormHeading>
        <CardNumberInput
          type="number"
          placehonder="Card Number"
          onChange={onChangeCardNumber}
          value={cardNumber}
        />
        <CardNameInput
          type="text"
          placehonder="Cardholder Name"
          onChange={onChangeCardName}
          value={cardName}
        />
      </InputContainer>
    </CreditCardPage>
  );
};

export default CreditCard;
