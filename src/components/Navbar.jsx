import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Biblioteca</Link>
        <div>
          <Link className="nav-link" to="/rented">Mis Alquileres</Link>
          <Link className="nav-link" to="/about">Acerca de</Link>
          {user ? (
            <button className="btn btn-danger ms-3" onClick={logout}>Cerrar Sesión</button>
          ) : (
            <Link className="btn btn-primary ms-3" to="/login">Iniciar Sesión</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
