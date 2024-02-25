import CardLogin from "../../components/card-login";
import FetchGet from "../../components/fetch-get";

const Home=() => {
  return(
    <>
      <div className="d-flex border border-black container">
        <div className="col-3 px-4">
          <CardLogin />
        </div>
        <div className="col-6">
          <FetchGet />
        </div>
        <div className="col-3">3</div>
      </div>
    </>
  )
}

export default Home