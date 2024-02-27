import React, { useState, useEffect } from "react";
import { CardPost } from "../card-post";
import "./style.css";
import { Link } from "react-router-dom";

const FetchGet = (props) => {
  const [cardData, setCardData] = useState([]);
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    let letter = e.target.value;
    setSearch(letter);
  };

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
        <div className="border col-1 text-center d-flex pt-1 rounded bg-black text-white">
          dev
        </div>
        <div className="col-8">
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search!"
            className="form-control"
          />
        </div>
        <div className="col-3 d-flex justify-content-end">
          <button className="btn btn-primary btn-sm mr-2">
            Create Account
          </button>
          <button className="btn btn-light btn-sm ms-2">Login</button>
        </div>
      </div>

      <div className="">
        {cardData &&
          [...results].reverse().map(({ Titulo, Tags, UrlImagen, key }) => (
            <Link
              to={`/details/${key}`}
              key={key}
              className="text-dark d-block my-zoom-effect my-text-blue" // Añade las clases para el efecto de zoom y cambio de color
              style={{ textDecoration: "none" }} // Elimina la línea debajo del texto
            >
              <div className="text-dark">
                <CardPost UrlImagen={UrlImagen} Titulo={Titulo} Tags={Tags} />
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default FetchGet;
