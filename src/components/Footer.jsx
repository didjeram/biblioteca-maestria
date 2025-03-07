import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p className="footer__text mb-0">
          &copy; {new Date().getFullYear()} Biblioteca Online. Todos los derechos reservados.
        </p>
        <p className="footer__links">
          <a href="/about" className="text-light mx-2">Acerca de</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
