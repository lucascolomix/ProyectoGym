import React from 'react';
import '../css/login.css'; // Importar el archivo CSS

export const Login = () => {
  return (
    <div className="login-container">
      <div className="row">
        <div className="col text-center">
          <h3>
            Inicio de Sesion <i className="fa fa-btc" aria-hidden="true"></i>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"> {/* Ancho completo del formulario */}
          <form onSubmit="">
            <div className="mb-3 d-grid">
              <label>Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3 d-grid">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
