import { useRef } from "react";
import { useForm } from "react-hook-form";

const CrearPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Titulo: "",
      Descripcion: "",
      Tags: "",
      UrlImagen: "",
    },
  });

  const formRef = useRef(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const today = new Date();
      const fechaCreacion = `${today.getDate()}-${
        today.getMonth() + 1
      }-${today.getFullYear()}`;
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
        console.log("Datos enviados correctamente");
        reset();
        formRef.current.reset();
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  });

  return (
    <form onSubmit={onSubmit} ref={formRef} className="container mt-5">
      <div className="mb-3">
        <label className="form-label">Titulo:</label>
        <input
          type="text"
          name="Titulo"
          className="form-control"
          {...register("Titulo", {
            required: {
              value: true,
              message: "Titulo es requerido",
            },
            maxLength: 50,
            minLength: 2,
          })}
        />
        {errors.Titulo?.type === "required" && (
          <span className="text-danger">Titulo requerido</span>
        )}
        {errors.Titulo?.type === "maxLength" && (
          <span className="text-danger">
            Titulo no debe ser mayor a 50 caracteres
          </span>
        )}
        {errors.Titulo?.type === "minLength" && (
          <span className="text-danger">
            Titulo debe ser mayor a 2 caracteres
          </span>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Descripcion:</label>
        <input
          type="text"
          name="Descripcion"
          className="form-control"
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
          <span className="text-danger">Descripcion requerido</span>
        )}
        {errors.Descripcion?.type === "maxLength" && (
          <span className="text-danger">
            Descripcion no debe ser mayor a 5000 caracteres
          </span>
        )}
        {errors.Descripcion?.type === "minLength" && (
          <span className="text-danger">
            Descripcion debe ser mayor a 2 caracteres
          </span>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Tags:</label>
        <input
          type="text"
          name="Tags"
          className="form-control"
          {...register("Tags", {
            required: {
              value: true,
              message: "Tags es requerido",
            },
            maxLength: 100,
            minLength: 2,
          })}
        />
        {errors.Tags?.type === "required" && (
          <span className="text-danger">Tags requerido</span>
        )}
        {errors.Tags?.type === "maxLength" && (
          <span className="text-danger">
            Tags no debe ser mayor a 100 caracteres
          </span>
        )}
        {errors.Tags?.type === "minLength" && (
          <span className="text-danger">
            Tags debe ser mayor a 2 caracteres
          </span>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">UrlImagen:</label>
        <input
          type="text"
          name="UrlImagen"
          className="form-control"
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
          <span className="text-danger">UrlImagen requerido</span>
        )}
        {errors.UrlImagen?.type === "maxLength" && (
          <span className="text-danger">
            UrlImagen no debe ser mayor a 500 caracteres
          </span>
        )}
        {errors.UrlImagen?.type === "minLength" && (
          <span className="text-danger">
            UrlImagen debe ser mayor a 2 caracteres
          </span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default CrearPost;
