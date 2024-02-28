import React, { useState, useEffect } from "react";
import { CardPost } from "../card-post";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FetchGet = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [url, setURL] = useState("/")
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  const [cardData, setCardData] = useState([]);
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    let letter = e.target.value;
    setSearch(letter);
  };

  //Botones que actualizan el estado de la URL para aplicar los filters

  const topButton = () => {
    setURL("/top")
  }

  const latestButton = () => {
    setURL("/")
  }

  const relevantButton = () => {
    setURL("/relevant")
  }
//
  

  useEffect(() => {
    const getAllData = async () => {
      const response = await fetch(
        "https://firstdatabase-c5db5-default-rtdb.firebaseio.com/post.json"
      );
      const data = await response.json();
      const formattedData = Object.keys(data).map((key) => ({
        key,
        ...data[key],
      }));
      setCardData(formattedData);
      //refreshFilter();
    };

    getAllData();
  }, []);

  // Filtrar los datos cuando la búsqueda cambia
  const results = !search
    ? cardData
    : cardData.filter((item) =>
        item.Titulo.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <>
      <div className="row container-fluid align-items-center">
        <div className="border col-1 text-center d-flex pt-1 rounded bg-black text-white p-2">
          Dev
        </div>
        <div className="col-8">
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search 🔍"
            className="form-control text-center"
          />
        </div>
        <div className="col-3 d-flex justify-content-end">
  {token ? (
    <>
      <Link to="/crearpost" className="btn btn-primary btn-sm mr-2">Create Post</Link>
      <button className="btn btn-light btn-sm ms-2" onClick={handleLogout}>Log out</button>
    </>
  ) : (
    <>
      <Link to="/register" className="btn btn-primary btn-sm mr-2">Create Account</Link>
      <Link to="/login" className="btn btn-light btn-sm ms-2">Login</Link>
    </>
  )}
</div>
      </div>

      <div class="row justify-content-start align-items-start">
        <div class="col-auto">
          <button onClick={relevantButton} class="btn custom-button">
            <strong>Relevant</strong>
          </button>
        </div>
        <div class="col-auto">
          <button onClick={latestButton} class="btn custom-button">Latest</button>
        </div>
        <div class="col-auto">
            <button onClick={topButton} class="btn custom-button">Top</button>
        </div>
      </div>

      <div className="">
        {url === "/" &&
          [...results].reverse().map(({ Titulo, Tags, UrlImagen,fechaCreacion, key }) => (
            <Link
              to={`/details/${key}`}
              key={key}
              className="text-dark d-block my-zoom-effect my-text-blue" // Añade las clases para el efecto de zoom y cambio de color
              style={{ textDecoration: "none" }} // Elimina la línea debajo del texto
            >
              <div className="text-dark">
                <CardPost UrlImagen={UrlImagen} Titulo={Titulo} Tags={Tags} fechaCreacion={fechaCreacion} />
              </div>
            </Link>
          ))}
      </div>
      
      <div className="">
        {url === "/top" &&
          [...results].reverse().filter((user) => user.Descripcion.length > 25).map(({ Titulo, Tags, UrlImagen,fechaCreacion, key }) => (
            <Link
              to={`/details/${key}`}
              key={key}
              className="text-dark d-block my-zoom-effect my-text-blue" // Añade las clases para el efecto de zoom y cambio de color
              style={{ textDecoration: "none" }} // Elimina la línea debajo del texto
            >
              <div className="text-dark">
                <CardPost UrlImagen={UrlImagen} Titulo={Titulo} Tags={Tags} fechaCreacion={fechaCreacion} />
              </div>
            </Link>
          ))}
      </div>
      <div className="">
        {url === "/relevant" &&
          [...results].reverse().filter((user) => user.Titulo.length > 40).map(({ Titulo, Tags, UrlImagen,fechaCreacion, key }) => (
            <Link
              to={`/details/${key}`}
              key={key}
              className="text-dark d-block my-zoom-effect my-text-blue" // Añade las clases para el efecto de zoom y cambio de color
              style={{ textDecoration: "none" }} // Elimina la línea debajo del texto
            >
              <div className="text-dark">
                <CardPost UrlImagen={UrlImagen} Titulo={Titulo} Tags={Tags} fechaCreacion={fechaCreacion} />
              </div>
            </Link>
          ))}
      </div>
      
    </>
  );
};

export default FetchGet;
