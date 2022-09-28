import titleStyled from "./App.modules.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const [showing, setShowing] = useState(false);
  const onClickShowing = () => setShowing((prev) => !prev);

  const onChange = (e) => setKeyword(e.target.value);

  function Hello() {
    // cleanup
    useEffect(() => {
      console.log("created :)"); // 생성시 해당 코드줄과 아래의 리턴줄이 한번더 실행되는것은   React.StricMode가 활성화 되어 있기 때문
      return () => console.log("destroyed :(");
    }, []);
    return <h1>Hello</h1>;
  }

  console.log("i run all the time");
  useEffect(() => {
    // useEffect 단 한번만 실행시키는 명령어
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 6) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("counter FOR", counter);
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword & counter change");
  }, [counter, keyword]);

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const [showing, setShowing] = useState(false);
  const onClickShowing = () => setShowing((prev) => !prev);

  const onChange = (e) => setKeyword(e.target.value);

  function Hello() {
    // cleanup
    useEffect(() => {
      console.log("created :)"); // 생성시 해당 코드줄과 아래의 리턴줄이 한번더 실행되는것은   React.StricMode가 활성화 되어 있기 때문
      return () => console.log("destroyed :(");
    }, []);
    return <h1>Hello</h1>;
  }

  console.log("i run all the time");
  useEffect(() => {
    // useEffect 단 한번만 실행시키는 명령어
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 6) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("counter FOR", counter);
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword & counter change");
  }, [counter, keyword]);

  return (
    <div>
      <h1 className={titleStyled.title}>Welcome back!</h1>
      <Button text="continue" />
    </div>
  );
}

export default App;
