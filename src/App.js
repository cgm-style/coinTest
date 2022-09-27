import Button from "./Button";
import titleStyled from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={titleStyled.title}>Welcome back!</h1>
      <Button text="continue" />
    </div>
  );
}

export default App;
