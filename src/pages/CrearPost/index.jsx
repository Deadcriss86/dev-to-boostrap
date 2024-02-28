import { useRef } from "react";
import { useForm } from "react-hook-form";

const CrearPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      Titulo: "",
      Descripcion: "",
      Tags: "",
      UrlImagen: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Obtener la fecha actual
      const fechaCreacion = new Date().toISOString();

      // Agregar la fecha de creación a los datos del formulario
      const postData = { ...data, fechaCreacion };

      const response = await fetch(
        "https://firstdatabase-c5db5-default-rtdb.firebaseio.com/post.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
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
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Titulo:</label>
        <input
          type="text"
          name="Titulo"
          {...register("Titulo", {
            required: {
              value: true,
              message: "Titulo es requerido",
            },
            maxLength: 150,
            minLength: 2,
          })}
        />
        {errors.Titulo?.type === "required" && <span>Titulo requerido</span>}
        {errors.Titulo?.type === "maxLength" && (
          <span>Titulo no debe ser mayor a 150 caracteres</span>
        )}
        {errors.Titulo?.type === "minLength" && (
          <span>Titulo debe ser mayor a 2 caracteres</span>
        )}
      </div>
      <div>
        <label>Descripcion:</label>
        <input
          type="text"
          name="Descripcion"
          {...register("Descripcion", {
            required: {
              value: true,
              message: "Descripcion es requerido",
            },
            maxLength: 5000,
            minLength: 2,
          })}
        />
        {errors.Descripcion?.type === "required" && (
          <span>Descripcion requerido</span>
        )}
        {errors.Descripcion?.type === "maxLength" && (
          <span>Descripcion no debe ser mayor a 5000 caracteres</span>
        )}
        {errors.Descripcion?.type === "minLength" && (
          <span>Descripcion debe ser mayor a 2 caracteres</span>
        )}
      </div>
      <div>
        <label>Tags:</label>
        <input
          type="text"
          name="Tags"
          {...register("Tags", {
            required: {
              value: true,
              message: "Tags es requerido",
            },
            maxLength: 100,
            minLength: 2,
          })}
        />
        {errors.Tags?.type === "required" && <span>Tags requerido</span>}
        {errors.Tags?.type === "maxLength" && (
          <span>Tags no debe ser mayor a 100 caracteres</span>
        )}
        {errors.Tags?.type === "minLength" && (
          <span>Tags debe ser mayor a 2 caracteres</span>
        )}
      </div>
      <div>
        <label>UrlImagen:</label>
        <input
          type="text"
          name="UrlImagen"
          {...register("UrlImagen", {
            required: {
              value: true,
              message: "UrlImagen es requerido",
            },
            maxLength: 500,
            minLength: 2,
          })}
        />
        {errors.UrlImagen?.type === "required" && (
          <span>UrlImagen requerido</span>
        )}
        {errors.UrlImagen?.type === "maxLength" && (
          <span>UrlImagen no debe ser mayor a 500 caracteres</span>
        )}
        {errors.UrlImagen?.type === "minLength" && (
          <span>UrlImagen debe ser mayor a 2 caracteres</span>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default CrearPost;
