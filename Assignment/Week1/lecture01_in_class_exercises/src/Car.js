import React from "react";

const car = [
  { id: 1, name: "GRANDEUR", price: 4500, explanation: "Graceful design" },
  { id: 2, name: "BMW", price: 7800, explanation: "Functional of high level" },
  { id: 3, name: "SONATA", price: 2900, explanation: "Most commonplace car" },
  { id: 4, name: "BENTZ", price: 9400, explanation: "Very famous car" },
  { id: 5, name: "GENESIS", price: 6700, explanation: "Popular car" },
];

const Component = ({ car }) => (
  <div>
    <b style={{ display: "flex", flexWrap: "nowrap" }}>
      <div style={{ width: "15%" }}>
        [{car.id}]{car.name}
      </div>
      <div style={{ width: "10%" }}>{car.price} </div>
      <div style={{ width: "25%" }}>{car.explanation}</div>
    </b>
  </div>
);

const ComponentName = () => {
  return (
    <div>
      <h1> Car List </h1>
      {car.map((std) => (
        <Component car={std} />
      ))}
    </div>
  );
};

export default ComponentName;
