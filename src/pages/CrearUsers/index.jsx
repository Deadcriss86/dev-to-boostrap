import { useRef } from "react";
import { useForm } from "react-hook-form";

function Formulario() {
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
      const response = await fetch('https://firstdatabase-c5db5-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        // Éxito en el envío
        console.log('Datos enviados correctamente');
        reset();
      } else {
        // Error en el envío
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>username:</label>
        <input
          type="text"
          name="username"
          {...register("username", {
            required: {
              value: true,
              message: "username es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.username?.type === "required" && <span>username requerido</span>}
        {errors.username?.type === "maxLength" && (
          <span>username no debe ser mayor a 20 caracteres</span>
        )}
        {errors.username?.type === "minLength" && (
          <span>username debe ser mayor a 2 caracteres</span>
        )}
      </div>

      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="correo"
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
        {errors.correo && <span>{errors.correo.message}</span>}
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
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
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Confirma Contraseña:</label>
        <input
          type="password"
          name="confirmarPassword"
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
          <span>{errors.confirmarPassword.message}</span>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
