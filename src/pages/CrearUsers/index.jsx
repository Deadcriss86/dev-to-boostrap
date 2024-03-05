import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Formulario() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      correo: "",
      password: "",
      confirmarPassword: "",
    },
  });

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Verificar si el usuario ya existe
      const usersResponse = await fetch(
        "https://firstdatabase-c5db5-default-rtdb.firebaseio.com/users.json"
      );
      const usersData = await usersResponse.json();

      // Verificar si el usuario o correo ya existen
      const userExists = Object.values(usersData).some(
        (user) => user.username === data.username || user.correo === data.correo
      );

      if (userExists) {
        // Usuario o correo ya existe, mostrar mensaje de error
        setErrorMessage("El usuario o correo ya están registrados");
      } else {
        // Usuario y correo no existen, proceder con el registro
        const response = await fetch(
          "https://firstdatabase-c5db5-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          // Éxito en el envío
          console.log("Datos enviados correctamente");
          reset();
        } else {
          // Error en el envío
          console.error("Error al enviar los datos");
        }
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="container mt-4">
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          {...register("username", {
            required: {
              value: true,
              message: "Username es requerido",
            },
            maxLength: {
              value: 20,
              message: "Username no debe ser mayor a 20 caracteres",
            },
            minLength: {
              value: 2,
              message: "Username debe ser mayor a 2 caracteres",
            },
          })}
        />
        {errors.username && (
          <div className="invalid-feedback">{errors.username.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="correo" className="form-label">
          Correo Electrónico:
        </label>
        <input
          type="email"
          id="correo"
          className={`form-control ${errors.correo ? "is-invalid" : ""}`}
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && (
          <div className="invalid-feedback">{errors.correo.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Contraseña debe ser mayor a 6 caracteres",
            },
          })}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="confirmarPassword" className="form-label">
          Confirma Contraseña:
        </label>
        <input
          type="password"
          id="confirmarPassword"
          className={`form-control ${
            errors.confirmarPassword ? "is-invalid" : ""
          }`}
          {...register("confirmarPassword", {
            required: {
              value: true,
              message: "Confirmar contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Confirmar contraseña debe ser mayor a 6 caracteres",
            },
            validate: (value) =>
              value === password.current || "Las contraseñas no coinciden",
          })}
        />
        {errors.confirmarPassword && (
          <div className="invalid-feedback">
            {errors.confirmarPassword.message}
          </div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default Formulario;
