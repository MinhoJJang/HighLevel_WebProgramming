function formatDate(date) {
  return date.toLocaleDateString();
}

function Me(props) {
  return (
    <div className="Me">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.logo}
          alt={props.author.name}
        />

        <div className="UserInfo-name">{props.author.name}</div>
      </div>

      <div className="Me-text">{props.text}</div>

      <div className="Me-date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Me;
