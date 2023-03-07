import React from "react";
const element = <h1>hello worlddddd</h1>; // using JSX
function Hello() {
  return (
    <>
      {/* <h1> hello </h1>
      <h2> it's h2 </h2> */}
      {element}
    </>
  );
}

export default Hello;
