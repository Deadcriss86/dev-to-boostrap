import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://firstdatabase-c5db5-default-rtdb.firebaseio.com/users.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const users = await response.json();
      const foundUser = Object.values(users).find(
        (user) =>
          user.username === data.username && user.password === data.password
      );
      if (foundUser) {
        const token = "dummy_token";
        localStorage.setItem("token", token);
        console.log("Login successful!");
        navigate("/");
      } else {
        setErrorMessage("El usuario o la contraseña son incorrectos");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setErrorMessage(
        "Hubo un problema al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde."
      ); navigate("/session-timed-out");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="border col-7 py-4 d-flex flex-column align-items-center shadow">
        <h2>Login</h2>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            placeholder="User"
            className="text-center input-group-text"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-danger">Username is required</span>
          )}
          <br />
          <br />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="text-center input-group-text"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-danger">Password is required</span>
          )}
          <br />
          <br />

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" type="submit">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
