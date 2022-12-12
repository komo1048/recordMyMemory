import CreateButton from "../createButton/CreateButton";
import Card from "../card/Card";
import classes from "../container/Container.module.css";
import { useCallback, useContext, useEffect, useState } from "react";
import RecordContext from "../context/record-context";
import { useNavigate } from "react-router-dom";
import Pagination from "../footer/Pagination";

const Container = () => {
  const recordCtx = useContext(RecordContext);
  const navigate = useNavigate();

  const limit = 16;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    if (!recordCtx.isLogin) {
      navigate("../login");
    }
  }, [navigate, recordCtx.isLogin]);

  const [memoryList, setMemoryList] = useState([]);

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

    setMemoryList([...loadedMemory]);
  }, []);

  const onAddMemory = async item => {
    console.log("onAddMemory Running");
    await fetch("https://react-http-38d3b-default-rtdb.firebaseio.com/memoryTest.json", {
      body: JSON.stringify(item),
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlcoded",
      },
    });

    fetchMemory();
  };

  useEffect(() => {
    fetchMemory();
  }, [fetchMemory]);

  const onDeleteMemory = async memoryId => {
    console.log(memoryId);

    await recordCtx.deleteMemory(memoryId);

    fetchMemory();
  };

  const onUpdateMemory = async memory => {
    const memoryBody = {
      title: memory.title,
      date: memory.date,
      content: memory.content,
    };
    if (!!memory.image) {
      memoryBody.image = memory.image;
    }

    await fetch(`https://react-http-38d3b-default-rtdb.firebaseio.com/memoryTest/${memory.id}.json`, {
      method: "PATCH",
      body: JSON.stringify(memoryBody),
    });

    fetchMemory();
  };
  return (
    <div className={classes.box}>
      <CreateButton onAddMemory={onAddMemory} />
      <div className={classes.container}>
        {memoryList.slice(offset, offset + limit).map(memory => (
          <Card key={memory.id} memory={memory} deleteMemory={onDeleteMemory} upDateMemory={onUpdateMemory} />
        ))}

        <footer className={classes.footer}>
          <Pagination total={memoryList.length} limit={limit} page={page} setPage={setPage} />
        </footer>
      </div>
    </div>
  );
};

export default Container;
