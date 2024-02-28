import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "../Home";
import SigIn from "../SigIn";
import CrearPost from "../CrearPost";
import Formulario from "../CrearUsers";
import LoginForm from "../Login"
import NotFound from "../NotFound"
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "../details/details";
import './App.css';


/*const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },*
    { path: "/SigIn", element: <SigIn /> },*
    { path: "/CrearPost", element: <CrearPost /> },*
    { path: "/Register", element: <Formulario /> },*
    { path: "/Login", element: <LoginForm /> },*
    { path: '/*', element: <NotFound /> },*
    { path: "/details/:id", element: <Details/>}*
  ]);
  return routes;
};*/

const App = () => {
  return (
    <>
      <Routes>
        <Route path= "/" element= {<Home/>}/>
        <Route path= "/SigIn" element= {<SigIn />}/>
        <Route path= "/CrearPost" element= {<CrearPost />}/>
        <Route path=  "/Register" element= {<Formulario />}/>
        <Route path=  "/Login" element= {<LoginForm />}/>
        <Route path=  "/*" element= {<NotFound />}/>
        <Route path=  "/details/:id" element= {<Details/>}/>
      </Routes>
    </>
  );
};

export default App;
