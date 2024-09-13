import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const [joblist, setJobList] = useState([]);
  const [matchid, setmatchId] = useState("");
  const nameRef = useRef();
  const upnameRef = useRef();
  const upreqRef = useRef();
  const cnameRef = useRef();
  const reqRef = useRef();

  const getData = async () => {
    let res = await fetch("http://localhost:8080/list_jobs", { method: "GET" });
    let json = await res.json();
    console.log(json);
    setJobList(json);
  };

  const createJob = async () => {
    let data = {
      name: nameRef.current.value,
      company_name: cnameRef.current.value,
      requirements: reqRef.current.value,
    };
    let res = await fetch("http://localhost:8080/create_jobs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    let json = await res.json();
    console.log(json);
    getData();
    nameRef.current.value = "";
    cnameRef.current.value = "";
    reqRef.current.value = "";
  };

  const deleteJob = async (id) => {
    let res = await fetch(`http://localhost:8080/delete_job?id=${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    // let json = await res.json();
    // alert(json["msg"]);
    getData();
  };

  // const updateJob = async () => {
  //   let data = {
  //     name: upnameRef.current.value,
  //     requirements: upreqRef.current.value,
  //   };
  //   let res = await fetch("http://localhost:8080/update_job", {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //     headers: { "content-type": "application/json" },
  //   });
  //   let json = await res.json();
  //   console.log(json);
  //   getData();
  // };

  const loadDataForUpdate = async (id) => {
    let match = joblist.filter((j) => id === j._id);
    console.log(match);
    nameRef.current.value = match[0].name;
    cnameRef.current.value = match[0].company_name;
    reqRef.current.value = match[0].requirements;
    setmatchId(match[0]._id);
  };
  const updateJob = async () => {
    let name = nameRef.current.value;
    let company = cnameRef.current.value;
    let requirements = reqRef.current.value;
    let id = matchid;

    let data = {
      id: id,
      name: name,
      company: company,
      requirements: requirements,
    };
    let res = await fetch("http://localhost:8080/update_job", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    getData();
    nameRef.current.value = "";
    cnameRef.current.value = "";
    reqRef.current.value = "";
  };

  return (
    <div className="App">
      <div>
        <button onClick={getData}> List The Jobs </button>
      </div>
      <div>
        {joblist.map((obj, index) => {
          return (
            <p key={index}>
              <strong>Name : </strong>
              {obj.name}
              <br />
              <strong>Company Name : </strong>
              {obj.company_name} <br />
              <strong>Requirements : </strong>
              {obj.requirements} <br />
              <button onClick={() => deleteJob(obj._id)}>
                Delete this Job
              </button>
              <button onClick={() => loadDataForUpdate(obj._id)}>
                Load for Update
              </button>
            </p>
          );
        })}
      </div>
      <div>
        <h1>Create Form</h1>
        <div>
          <input type="name" ref={nameRef} placeholder="Job Name"></input>
        </div>
        <div>
          <input type="name" ref={cnameRef} placeholder="Company Name"></input>
        </div>
        <div>
          <input type="name" ref={reqRef} placeholder="Requirements"></input>
        </div>
        <div>
          <button onClick={createJob}>Add Job</button>
        </div>
        <div>
          <button onClick={updateJob}>Update Job</button>
        </div>
      </div>
      <div>
        {/* <div>
          <h2>UPDATE FORM</h2>
        </div>
        <div>
          <input type="name" ref={upnameRef} placeholder="Name"></input>
        </div>
        <div>
          <input type="name" ref={upreqRef} placeholder="Requirements"></input>
        </div>
        <div>
          <button onClick={updateJob}>Update Job</button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
