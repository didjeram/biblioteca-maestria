import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p className="footer__text mb-0">
          &copy; {new Date().getFullYear()} Biblioteca Online. Todos los derechos reservados. AAL
        </p>
      </div>
    </footer>
  );
};

export default Footer;
