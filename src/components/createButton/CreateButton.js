import { useRef, useState } from "react";
import Modal from "react-modal";
import classes from "./CreateButton.module.css";

const CreateButton = ({ onAddMemory }) => {
  const [openModal, setOpenModal] = useState(false);
  const inputTitle = useRef();
  const inputDate = useRef();
  const inputContent = useRef();

  const onModalOpen = () => {
    setOpenModal((prevState) => !prevState);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    onAddMemory({
      title: inputTitle.current.value,
      date: inputDate.current.value,
      content: inputContent.current.value,
    });
    setOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <button className={classes.button} onClick={onModalOpen}>
        작성하기
      </button>
      <Modal
        isOpen={openModal}
        onRequestClose={onModalOpen}
        className={classes.modal}
      >
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="inputTitle">제목 : </label>
            <input
              type="text"
              className={classes.inputTitle}
              id="inputTitle"
              ref={inputTitle}
            />
          </div>
          <div>
            <label htmlFor="inputDate">날짜 : </label>
            <input type="date" id="inputDate" ref={inputDate} />
          </div>
          <div>
            <label htmlFor="inputImg">이미지 첨부 : </label>
            <input type="file" id="inputImg" />
          </div>
          <div>
            <label htmlFor="inputContent">내용 : </label>
            <textarea id="inputContent" ref={inputContent}></textarea>
          </div>
          <button>작성</button>
          <button onClick={onModalOpen}>모달 닫기</button>
        </form>
      </Modal>
    </>
  );
};

export default CreateButton;
