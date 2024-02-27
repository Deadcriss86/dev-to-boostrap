export const CardPage = ({Titulo, Tags, UrlImagen, Descripcion}) => {
    return (
      <>
        <div className="col mx-1 my-2 border border-dark-subtle rounded">
          <img src={UrlImagen} alt="" className="img-fluid" />
          <div className="px-5 text-start">
            <h2 className="fs-1 text-lg">{Titulo}</h2>
            <h3 className="fs-6">{Tags}</h3>
            <p className="fs-2">{Descripcion}</p>
          </div>
        </div>
      </>
    );
  };