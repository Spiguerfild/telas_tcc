import { useState } from "react";
import "./Login.css";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-centralizador">
      <div className="Card-login Item-login">
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className="title">
          <h2>Login</h2>
        </div>
<div className="line">

</div>
        <div >

          <div className="inputs">
            <label>Nome: </label>
            <input type="text" />
          </div>

          <div className="inputs" >
            <label>Senha: </label>
            <input type="text" />
          </div>


        </div>

      </div>
    </div>
  );
}

export default Login;
