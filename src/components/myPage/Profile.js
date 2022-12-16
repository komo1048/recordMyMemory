import { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecordContext from "../context/record-context";
import MyMemoryLists from "./MyMemoryLists";
import classes from "./Profile.module.css";
const Profile = () => {
  const [myMemoryLists, setMyMemoryLists] = useState([]);

  const fetchMemory = useCallback(async () => {
    console.log("fetchMemory Running");
    const response = await fetch("https://react-http-38d3b-default-rtdb.firebaseio.com/memoryTest.json");
    const data = await response.json();

    const loadedMemory = [];

    for (const key in data) {
      loadedMemory.push({
        id: key,
        title: data[key].title,
        date: data[key].date,
        content: data[key].content,
        image: data[key].image,
      });
    }

    setMyMemoryLists([...loadedMemory]);
  }, []);

  useEffect(() => {
    fetchMemory();
  }, [fetchMemory]);

  const recordCtx = useContext(RecordContext);

  const onDeleteMemory = async myMemoryId => {
    console.log(myMemoryId);
    await recordCtx.deleteMemory(myMemoryId);

    fetchMemory();
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!recordCtx.isLogin) {
      navigate("../login");
    }
  }, [navigate, recordCtx.isLogin]);

  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <span>아이디 : </span>
        <input type="text" readOnly />
        <hr />
        <button>비밀번호 변경</button>
        <hr />
        <h3>게시물 목록</h3>
        {myMemoryLists.map((myMemoryList, index) => (
          <MyMemoryLists key={myMemoryList.id} index={index} myMemoryList={myMemoryList} deleteMemory={onDeleteMemory} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
