import React, { useState } from "react";
// Example 1

// function FavoriteColor() {
//   const [color, setColor] = useState("red");
//   return <h1>My favorite color is {color}!</h1>;
// }

function FavoriteColor() {
  const [color, setColor] = useState("red");
  if (color === "blue") {
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        {
          <button type="button" onClick={() => setColor("red")}>
            Red
          </button>
        }
      </>
    );
  } else {
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        {
          <button type="button" onClick={() => setColor("blue")}>
            Blue
          </button>
        }
      </>
    );
  }
}

export default FavoriteColor;
