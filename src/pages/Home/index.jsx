import CardLogin from "../../components/card-login";
import FetchGet from "../../components/fetch-get";
import PanelIzq from "../../components/panelIzq"
import Discuss from "../../components/panel-der"
const Home=() => {
  return(
    <>
      <div className="d-flex container">
        <div className="col-3 px-4 pt-5">
          <CardLogin />
          <PanelIzq/>
        </div>
        <div className="col-6">
          <FetchGet />
        </div>
        <div className="col-3 pt-5">
          <Discuss/>
        </div>
      </div>
    </>
  )
}

export default Home