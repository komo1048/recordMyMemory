import Button from "./components/button/Button";
import Card from "./components/card/Card";
import classes from "./components/container/container.module.css";

function App() {
  return (
    <>
      <Button />
      <div className={classes.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
