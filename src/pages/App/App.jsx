import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import SigIn from "../SigIn";
import CrearPost from "../CrearPost";
import Formulario from "../CrearUsers";
import "bootstrap/dist/css/bootstrap.min.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/SigIn", element: <SigIn /> },
    { path: "/CrearPost", element: <CrearPost /> },
    { path: "/CrearUSers", element: <Formulario /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
