import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  let firstname = "Nithish";
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const Validate = ()=>{
    if(email == "" && phone == ""){
      alert("Please fill Both field")
    } else if (email == "") {
      alert("Please fill Email")
    } else if (phone == "") {
      alert("Please fill phone number")
    } else {
      alert("Validated!")
    }
  }
  return (
    <div className="App">
      <h1>This is React App</h1>
      <Home />
      {firstname}
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value)) {
            setPhone(value);
          }
        }}
        id="phone"
        placeholder="phone"
        maxLength={10}
        value={phone}
      />
      <br />
      <button type="submit" onClick={Validate}>Submit</button>
    </div>
  );
}

export default App;