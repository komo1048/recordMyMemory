import { useRef, useState } from "react";
import Backdrop from "../card/Backdrop";
import imageCompress from "../util/imageCompress";
import classes from "./CreateButton.module.css";

const CreateButton = ({ onAddMemory }) => {
  const [openModal, setOpenModal] = useState(false);
  const inputTitle = useRef();
  const inputDate = useRef();
  const inputContent = useRef();
  const [imagePreview, setImagePreview] = useState("");

  const onModalOpen = () => {
    setOpenModal(prevState => !prevState);
  };

  const imageHandler = async e => {
    if (e.target.files[0]) {
      await imageCompress(e.target.files[0], setImagePreview);
    }
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    onAddMemory({
      title: inputTitle.current.value,
      date: inputDate.current.value,
      content: inputContent.current.value,
      image: imagePreview,
    });
    setOpenModal(prevState => !prevState);
  };

  return (
    <>
      <button className={classes.button} onClick={onModalOpen}>
        작성하기
      </button>
      {openModal && (
        <div className={classes.modalContainer}>
          <div isOpen={openModal} onRequestClose={onModalOpen} className={classes.modal}>
            <form onSubmit={onSubmitHandler}>
              <article className={classes.post_content}>
                <dl className={classes.meta}>
                  <dt>
                    <label htmlFor="inputTitle">제목 : </label>
                  </dt>
                  <dd>
                    <input type="text" className={classes.inputTitle} id="inputTitle" ref={inputTitle} placeholder="제목을 입력해주세요." />
                  </dd>
                </dl>
                <dl className={classes.meta}>
                  <dt>
                    <label htmlFor="inputDate">날짜 : </label>
                  </dt>
                  <dd>
                    <input type="date" id="inputDate" ref={inputDate} />
                  </dd>
                </dl>
                <dl className={classes.meta}>
                  <dt>
                    <label htmlFor="inputImg">이미지 : </label>
                  </dt>
                  <dd>
                    <input type="file" id="inputImg" onChange={imageHandler} />
                  </dd>
                </dl>
                <dl className={classes.meta}>
                  <dt>
                    <label htmlFor="inputContent">내용 : </label>
                  </dt>
                  <dd>
                    <textarea id="inputContent" rows="5" cols="54" ref={inputContent} placeholder="내용을 입력해주세요."></textarea>
                  </dd>
                </dl>
              </article>
              <button>작성</button>
              <button onClick={onModalOpen}>모달 닫기</button>
            </form>
          </div>
          <Backdrop onClick={onModalOpen} />
        </div>
      )}
    </>
  );
};

export default CreateButton;
