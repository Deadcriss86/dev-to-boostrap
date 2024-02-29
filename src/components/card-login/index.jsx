import { NavLink } from "react-router-dom";

const CardLogin = () => {
  return (
    <div className="card m-auto fluid m">
      <div className="card-body">
        <h2 className="fs-5">
          DEV Community is a community of 1,269,985 amazing developers
        </h2>
        <p className="card-text">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="d-grid gap-2 col-12 mx-auto">
          <NavLink to="/register" className="btn btn-outline-primary btn-block" type="button">
            Create Account
          </NavLink>
          <NavLink to="/Login" className="btn btn-outline-primary btn-block" type="button">
            <span className="text-gray">Log In</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;
