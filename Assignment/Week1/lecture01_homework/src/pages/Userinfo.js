import User from "../User";

const user = {
  name: "minho jang",
  product: "BMW G7",
  price: 7800,
  date: new Date(),
  logo: "bmw.png",
};

const Userinfo = () => {
  return (
    <div>
      <h1>Customer Information</h1>
      <User
        name={user.name}
        product={user.product}
        price={user.price}
        date={user.date}
        logo={user.logo}
      />
    </div>
  );
};

export default Userinfo;
