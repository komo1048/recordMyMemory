import CreateButton from "./components/createButton/CreateButton";
import Card from "./components/card/Card";
import classes from "./components/container/Container.module.css";
import Modal from "react-modal";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [memoryList, setMemoryList] = useState([]);

  const fetchMemory = useCallback(async () => {
    console.log("fetchMemory Running");
    const response = await fetch(
      "https://react-http-38d3b-default-rtdb.firebaseio.com/memory.json"
    );
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

  const onAddMemory = async (item) => {
    console.log("onAddMemory Running");
    await fetch(
      "https://react-http-38d3b-default-rtdb.firebaseio.com/memory.json",
      {
        body: JSON.stringify(item),
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlcoded",
        },
      }
    );

    fetchMemory();
  };

  useEffect(() => {
    fetchMemory();
  }, [fetchMemory]);

  const onDeleteMemory = async (memoryId) => {
    console.log(memoryId);

    await fetch(
      `https://react-http-38d3b-default-rtdb.firebaseio.com/memory/${memoryId}.json`,
      {
        method: "DELETE",
      }
    );

    fetchMemory();
  };

  const onUpdateMemory = async (memory) => {
    const memoryBody = {
      title: memory.title,
      date: memory.date,
      content: memory.content,
      image: memory.image,
    };
    await fetch(
      `https://react-http-38d3b-default-rtdb.firebaseio.com/memory/${memory.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(memoryBody),
      }
    );

    fetchMemory();
  };

  return (
    <div className={classes.box}>
      <CreateButton onAddMemory={onAddMemory} />
      <div className={classes.container}>
        {memoryList.map((memory) => {
          return (
            <Card
              key={memory.id}
              memory={memory}
              deleteMemory={onDeleteMemory}
              upDateMemory={onUpdateMemory}
            />
          );
        })}
      </div>
    </div>
  );
}
Modal.setAppElement("#root");
export default App;
