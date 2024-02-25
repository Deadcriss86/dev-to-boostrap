const CardLogin = () => {
  return (
    <>
      <div className="card m-auto fluid m">
        <div className="card-body">
          <h2 className="fs-5">
            DEV Community is a community of 1,269,985 amazing developers
          </h2>
          <p className="card-text">
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-outline-primary" type="button">
              Create Account
            </button>
            <button class="btn btn-outline-light" type="button">
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLogin;
