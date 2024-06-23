import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CONECTA KOMERS</div>
      <nav>
        <ul>
          <li><a href="#">INICIO</a></li>
          <li><a href="#">SERVICIOS</a></li>
          <li><a href="#">CONTACTO</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-button">INICIAR SESIÓN</button>
        <button className="register-button">REGISTRO</button>
      </div>
    </header>
  );
};

export default Header;