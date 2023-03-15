import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Welcome to the Service of Car Sales</h1>;
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/carinfo">Carinfo</Link>
          </li>
          <li>
            <Link to="/userinfo">Userinfo</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
