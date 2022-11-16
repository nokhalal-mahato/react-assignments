import { observer } from "mobx-react";
import {
  CompleteBtn,
  DeleteBtn,
  EditBtn,
  NotesItemContainer,
} from "./styledComponent";
import { useTranslation } from "react-i18next";
import i18n from '../../i18n';

const NotesItem = (props) => {
  const { t } = useTranslation();
  const { data } = props;

  const editHandler = () => {
    props.editHandler(data);
  };

  const completeHandler = () => {
    props.completeHandler(data);
  };
  const deleteHandler = () => {
    props.deleteHandler(data.id);
  };
  return (
    <NotesItemContainer isComplete={data.isComplete}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      <EditBtn onClick={editHandler}>{t("edit")}</EditBtn>
      <CompleteBtn isComplete={data.isComplete} onClick={completeHandler}>
        {data.isComplete ? t("incomplete") : t("complete")}
      </CompleteBtn>
      <DeleteBtn onClick={deleteHandler}>{t("delete")}</DeleteBtn>
    </NotesItemContainer>
  );
};

export default observer(NotesItem);
