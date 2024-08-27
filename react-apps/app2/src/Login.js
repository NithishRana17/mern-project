import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function validate() {
    if (email === "" && pass === ""){
      alert("Please fill Both field")
    }else if (email === "") {
      alert("email is empty");
    } else if (pass === "") {
      alert("password is empty");
    } else {
      let data = {
        email: email,
        password: pass,
      };
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      });
      let json = await res.json();
      if (json["token"] == "QpwL5tke4Pnpja7X4") {
        alert("Login successful!");
      } else {
        alert("credentials are wrong");
      }
    }
  }

  return (
    <div>
      <div>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
      </div>
      <div>
        <input
          type="pass"
          id="pass"
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
      </div>
      <div>
        <button type="submit" id="submit" onClick={() => validate()}>
          Login
        </button>
      </div>
    </div>
  );
}
