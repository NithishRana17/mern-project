import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

export default function Home() {
  const counterval = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const add = () => {
    dispatch({
      type: "add",
    });
  };
  const sub = () => {
    dispatch({
      type: "sub",
    });
  };
  const storeMyDetails = () => {
    dispatch({
      type: "saveDetails",
      data: { name: "Nithish", email: "nithishrana17@gmail.com" },
    });
  };
  return (
    <div>
      <Header />

      <h1>{counterval}</h1>
      <br />
      <input type="button" value="add" onClick={add} />
      <br />
      <input type="button" value="sub" onClick={sub} />
      <br />
      <input type="button" value="store" onClick={storeMyDetails} />
    </div>
  );
}
