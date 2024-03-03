import CardLogin from "../../components/card-login";
import FetchGet from "../../components/fetch-get";
import PanelIzq from "../../components/panelIzq";
import Discuss from "../../components/panel-der";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="d-flex container">
        <div className="col-lg-3 col-md-5 px-4 pt-5 d-none d-md-block">
          <CardLogin />
          <PanelIzq />
        </div>
        <div className="col-lg-6 col-md-9">
          <FetchGet />
        </div>
        <div className="col-lg-3 pt-5 d-none d-md-block">
          <Discuss />
        </div>
      </div>
    </>
  );
};

export default Home;
