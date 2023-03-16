function formatDate(date) {
  return date.toLocaleDateString();
}

function User(props) {
  return (
    <div style={{ marginLeft: "35px" }}>
      <b>
        <div className="UserInfo">
          <img className="Car_picture" src={props.logo} />
        </div>

        <div className="UserInfo-name">Customer name: {props.name}</div>

        <div className="UserInfo-price">Product: {props.product}</div>

        <div className="UserInfo-price">Price: {props.price}</div>

        <div className="UserInfo-date">Date: {formatDate(props.date)}</div>
      </b>
    </div>
  );
}

export default User;
