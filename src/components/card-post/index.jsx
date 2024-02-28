import { FaThumbsUp, FaComment, FaSave } from "react-icons/fa";

export const CardPost = ({ Titulo, Tags, UrlImagen, Descripcion }) => {
  // Manejo de errores si la URL de la imagen está vacía
  const imgUrl = UrlImagen || "https://via.placeholder.com/150";

  return (
    <div className="col mx-1 my-2 border border-dark-subtle rounded">
      <img src={imgUrl} alt={Titulo} className="img-fluid" />
      <div className="d-flex align-items-center gap-2">
        <div className="d-flex align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle bg-secondary text-white"
            style={{ width: "32px", height: "32px" }}
          >
            MT
          </div>
          <div className="ms-2">
            <p className="m-0 fw-semibold">Michael Tharrington</p>
            <p className="m-0 text-muted">for The DEV Team</p>
          </div>
        </div>
        <span className="text-muted">Feb 27</span>
      </div>
      <div className="px-5 text-start">
        <h2 className="fs-2">{Titulo}</h2>
        <h3 className="fs-6">{Tags}</h3>
        <p>{Descripcion}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="mb-4 px-2">
              <FaThumbsUp /> 18 likes
            </span>
            <span className="mb-4 px-2">
              <FaComment /> 2 comentarios
            </span>
          </div>
          <span>
            <FaSave /> save
          </span>
        </div>
      </div>
    </div>
  );
};
