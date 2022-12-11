import { useEffect, useState, useCallback } from "react";
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
      });
    }

    setMyMemoryLists([...loadedMemory]);
  }, []);

  useEffect(() => {
    fetchMemory();
  }, [fetchMemory]);

  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <span>아이디 : </span>
        <input type="text" readOnly />
        <hr />
        <button>비밀번호 변경</button>
        <hr />
        <h2>게시물 목록</h2>
        {myMemoryLists.map((myMemoryList, index) => {
          return (
            <>
              <div className={classes.myCards}>
                <span>{index + 1}</span> | <span>{myMemoryList.title}</span> | <>{myMemoryList.content}</>
              </div>
              <button className={classes.myCardDeleteBtn}>x</button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
