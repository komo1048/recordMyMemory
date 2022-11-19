import CreateButton from "./components/createButton/CreateButton";
import Card from "./components/card/Card";
import classes from "./components/container/container.module.css";
import Modal from "react-modal";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [memoryList, setMemoryList] = useState([]);

  const fetchMemory = useCallback(async () => {
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

    setMemoryList(loadedMemory);
  }, []);

  useEffect(() => {
    fetchMemory();
  }, [fetchMemory]);

  const onAddMemory = async (item) => {
    const response = await fetch(
      "https://react-http-38d3b-default-rtdb.firebaseio.com/memory.json",
      {
        body: JSON.stringify(item),
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
      }
    );

    const data = await response.json();

    setMemoryList((prevMemory) => {
      return [...prevMemory, { ...data }];
    });
  };

  const onDeleteMemory = (memoryId) => {
    console.log(memoryId);
    setMemoryList((prevMemory) => {
      return prevMemory.filter((item) => item.id !== memoryId);
    });
  };
  return (
    <div className={classes.box}>
      <CreateButton onAddMemory={onAddMemory} className={classes.creatBtn} />
      <div className={classes.container}>
        {memoryList.map((memory) => {
          return (
            <Card
              key={memory.id}
              id={memory.date}
              memory={memory}
              deleteMemory={onDeleteMemory}
            />
          );
        })}
      </div>
    </div>
  );
}
Modal.setAppElement("#root");
export default App;
