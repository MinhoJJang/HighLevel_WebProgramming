// Example 1

// function Car(props) {
//   return <h2> {props.brand} lives in my garage!</h2>;
// }
// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand="Ford" />
//     </>
//   );
// }
// export default Garage;

// Example 2
function Car(props) {
  return <h2> {props.brand} lives in my garage!</h2>;
}
function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carName} />
    </>
  );
}
export default Garage;

/*
// Example 3
function Car(props) {
  return (
    <h2>
      {" "}
      {props.brand.model} {props.brand.name} lives in my garage!
    </h2>
  );
}
function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}
export default Garage;
*/
