import { useState } from "react";
import { ErrorMessage, Heading, PasswordInput, PasswordValidatorContainer, PasswordValidatorPage, Text } from "./styledComponent";

const PasswordValidator=()=>{
    const [password,setPassword]=useState('')
    const onChangeInput=(event)=>{
        setPassword(event.target.value);
    }
    return (
      <PasswordValidatorPage>
        <PasswordValidatorContainer>
          <Heading>Password Validator</Heading>
          <Text>Check how strong and secure is your password</Text>
          <PasswordInput
            type="password"
            onChange={onChangeInput}
            value={password}
          />
          {password.length < 8 && (
            <ErrorMessage>
              Your password must be atleast 8 characters
            </ErrorMessage>
          )}
        </PasswordValidatorContainer>
      </PasswordValidatorPage>
    );
}

export default PasswordValidator;