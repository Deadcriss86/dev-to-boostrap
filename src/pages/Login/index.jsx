import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://firstdatabase-c5db5-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Si la respuesta es exitosa, puedes redirigir al usuario a otra página o hacer alguna otra acción
        console.log('Usuario autenticado correctamente');
      } else {
        // Si hay un error en la autenticación, puedes mostrar un mensaje de error
        console.error('Error al autenticar al usuario');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre de usuario</label>
        <input {...register('nombre', { required: 'Nombre de usuario requerido' })} />
        {errors.nombre && <p>{errors.nombre.message}</p>}
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register('password', { required: 'Contraseña requerida' })} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
