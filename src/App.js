import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Cardload from "./Cardload";

const App = () => {
  const [userlist, setUserList] = useState([]);
  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        )
        .then((res) => setUserList(res.data), setisLoading(false));
    }, 2000);
  }, []);
  return (
    <div className="App">
      {isloading ? (
        <>
          <Cardload />
          <Cardload />
          <Cardload />
          <Cardload />
          <Cardload />
          <Cardload />
          <Cardload />
          <Cardload />
          <Cardload />
        </>
      ) : (
        userlist.map((user) => (
          <div className="card">
            <img src={"https://joeschmoe.io/api/v1/" + user.first} alt="user" />
            <h1>{user.first}</h1>
            <h2>{user.email}</h2>
            <h3>{user.address}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
