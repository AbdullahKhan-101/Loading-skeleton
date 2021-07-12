import React from "react";
import Skeleton from "react-loading-skeleton";

const Cardload = () => {
  return (
    // <div className="App">
    <div className="card">
      <Skeleton circle={true} height={100} width={110} />
      <h1>
        <Skeleton />
      </h1>
      <h2>
        <Skeleton />
      </h2>
      <h3>
        <Skeleton />
      </h3>
    </div>
    // </div>
  );
};

export default Cardload;
