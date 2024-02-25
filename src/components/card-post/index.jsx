export const CardPost = ({Title, Tags, MainImageURL}) => {
    return (
      <>
        <div className="col mx-1 my-2 border border-dark-subtle rounded">
          <img src={MainImageURL} alt="" className="img-fluid" />
          <div className="px-5 text-start">
            <h2 className="fs-2">{Title}</h2>
            <h3 className="fs-6">{Tags}</h3>
          </div>
        </div>
      </>
    );
  };