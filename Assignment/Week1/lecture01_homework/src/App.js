import "./App.css";
import Home from "./pages/Home";
import Carinfo from "./pages/Carinfo";
import Userinfo from "./pages/Userinfo";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="carinfo" element={<Carinfo />} />
          <Route path="userinfo" element={<Userinfo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
