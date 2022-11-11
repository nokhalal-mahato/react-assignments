import styled from "styled-components";

export const NotesPage = styled.div`
  min-height: 100%;
  margin: 0px auto;
  width: 80%;
  max-width: 900px;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 1px -1px 17px 0px rgb(0 0 0 / 0.25);
  border-radius: 4px;
  align-items: flex-start;
`;
export const NotesContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  border: 0px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 600;
  }

`;

export const AddBtn = styled.button`
  margin-right: 10px;
  align-self: flex-end;
  background-color: #4c63b6;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  border: 0px;
  margin-top: 10px;
`;
export const FilterListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top:40px;

  @media (max-width: 568px) {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 10px;
  }
`;
export const Notedescription = styled.textarea`
  width: 100%;
  border: 0px;
  padding: 10px 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 100;
  }
`;

export const Heading = styled.h1`
  color: #4c63b6;
  font-size: 36px;
  margin: 40px 0px;
  text-align: center;
`;
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  color: #475569;
`;
export const EmptyImage = styled.img`
  width: 150px;
`;
export const EmptyHeading = styled.h2`
  margin: 30px 0px 5px;
`;
export const EmptyText = styled.p`
  margin: 0px;
`;
