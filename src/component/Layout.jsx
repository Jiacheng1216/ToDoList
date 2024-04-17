import { Outlet } from "react-router-dom";
import NavComponent from "./Nav-component/NavComponent";

const Layout = ({ language, setLanguage }) => {
  return (
    <>
      <NavComponent language={language} setLanguage={setLanguage} />
      <Outlet />
    </>
  );
};

export default Layout;
