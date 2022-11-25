import { useRef, useState } from "react";
import classes from "./MemoryCard.module.css";

const MemoryCard = ({
  isOpenCard,
  viewMemory,
  onRequestClose,
  deleteMemory,
  upDateMemory,
}) => {
  const cssClasses = [
    "container",
    isOpenCard ? "containerOpen" : "containerClose",
  ];
  const [isUpdate, setIsUpdate] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const inputTitle = useRef();
  const inputDate = useRef();
  const inputContent = useRef();

  const onMemoryCardDelete = () => {
    onRequestClose();
    deleteMemory(viewMemory.id);
  };

  const imageHandler = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const resultImage = reader.result;
      setImagePreview(resultImage);
    };
  };

  const onMemoryCardUpdate = () => {
    setIsUpdate((prevState) => !prevState);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit running");
    upDateMemory({
      id: viewMemory.id,
      title: inputTitle.current.value,
      date: inputDate.current.value,
      content: inputContent.current.value,
      image: imagePreview,
    });
    setIsUpdate((prevState) => !prevState);
  };

  let showModal;
  if (isUpdate) {
    showModal = (
      <div onRequestClose={onRequestClose} className={cssClasses.join(" ")}>
        <form onSubmit={onSubmitHandler}>
          <button type="submit" className={classes.updateBtn}>
            저장
          </button>
          <button
            type="button"
            className={classes.deleteBtn}
            onClick={onMemoryCardDelete}
          >
            삭제
          </button>
          <article className={classes.post_content}>
            <dl className={classes.meta}>
              <dt>
                <label htmlFor="inputTitle">제목 : </label>
              </dt>
              <dd>
                <input
                  type="text"
                  className={classes.inputTitle}
                  id="inputTitle"
                  ref={inputTitle}
                  defaultValue={viewMemory.title}
                />
              </dd>
            </dl>
            <dl className={classes.meta}>
              <dt>
                <label htmlFor="inputDate">날짜 : </label>
              </dt>
              <dd>
                <input
                  type="date"
                  id="inputDate"
                  defaultValue={viewMemory.date}
                  ref={inputDate}
                />
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
                <textarea
                  id="inputContent"
                  rows="5"
                  cols="54"
                  defaultValue={viewMemory.content}
                  ref={inputContent}
                  placeholder="내용을 입력해주세요."
                ></textarea>
              </dd>
            </dl>
          </article>
        </form>
      </div>
    );
  } else {
    showModal = (
      <div onRequestClose={onRequestClose} className={cssClasses.join(" ")}>
        <button className={classes.updateBtn} onClick={onMemoryCardUpdate}>
          수정
        </button>
        <button className={classes.deleteBtn} onClick={onMemoryCardDelete}>
          삭제
        </button>
        <div className={classes.title}>
          {viewMemory.title} / {viewMemory.date}
        </div>
        <hr />
        <div className={classes.image}>
          <img src={viewMemory.image} alt="" />
        </div>
        <hr />
        <div className={classes.content}>{viewMemory.content}</div>
      </div>
    );
  }

  return showModal;
};

export default MemoryCard;
