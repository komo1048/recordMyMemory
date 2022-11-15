import CreateButton from "./components/createButton/CreateButton";
import Card from "./components/card/Card";
import classes from "./components/container/container.module.css";
import Modal from "react-modal";
import { useState } from "react";

function App() {
  const [memoryList, setMemoryList] = useState([]);

  const onAddMemory = (item) => {
    setMemoryList((prevMemory) => {
      return [...prevMemory, { ...item }];
    });
  };
  return (
    <>
      <CreateButton onAddMemory={onAddMemory} />
      <div className={classes.container}>
        {memoryList.map((memory) => {
          return <Card key={memory.date} memory={memory} />;
        })}
      </div>
    </>
  );
}
Modal.setAppElement("#root");
export default App;
