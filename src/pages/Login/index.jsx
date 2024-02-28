import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Inicializa useNavigate

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://firstdatabase-c5db5-default-rtdb.firebaseio.com/users.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
      const foundUser = Object.values(users).find(user => user.username === data.username && user.password === data.password);
      if (foundUser) {
        const token = "dummy_token";
        localStorage.setItem('token', token);
        console.log('Login successful!');
        navigate('/'); // Redirige al usuario a la página de dashboard después del inicio de sesión exitoso
      } else {
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" {...register("username", { required: true })} />
        {errors.username && <span>Username is required</span>}<br /><br />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password", { required: true })} />
        {errors.password && <span>Password is required</span>}<br /><br />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
