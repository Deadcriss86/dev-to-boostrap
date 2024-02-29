import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CardPage } from "../../components/card-page";
import Likes from "../../components/PanelLikes"
import PanelIzq from "../../components/panelIzq";
import Discuss from "../../components/panel-der";

const Details = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState([]);
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

  return (
    <>
      <div
        className="container d-flex justify-content-center "
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col-1">
            <Likes/>
          </div>
          <div className=" col-6">
            <div className="">
              {cardData &&
                cardData
                  .filter((user) => user.key === id)
                  .map(({ Titulo, Tags, UrlImagen, Descripcion }) => (
                    <CardPage
                      UrlImagen={UrlImagen}
                      Titulo={Titulo}
                      Tags={Tags}
                      Descripcion={Descripcion}
                    />
                  ))}
            </div>
          </div>
          <div className=" col-3"></div>
        </div>
      </div>
    </>
  );
};

export default Details;
