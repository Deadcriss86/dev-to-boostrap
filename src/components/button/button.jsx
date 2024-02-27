import { NavLink } from "react-router-dom";
const CreaBoton = (props) => {
    return (
        <>
             <NavLink to={props.path}>
                <button type="button" className="btn btn-primary">{props.title}</button>
            </NavLink>
        </>
        
    );
}

export default CreaBoton;