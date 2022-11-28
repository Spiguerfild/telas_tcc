import "./EscalaAberta.css";
import MusicoInstrumento from "./MusicoInstrumento";
function EscalaAberta() {
  return (
    <div className="containeri">
      <div className="header">
        <h2>Nome da Escala</h2>
      </div>

      <div className="corpo">
        <MusicoInstrumento />
        <MusicoInstrumento />
        <MusicoInstrumento />
        <MusicoInstrumento />
      </div>
<div className="botao-add">
<button>+</button>
</div>
      <div className="corpo-musicas">
        <h5>Musica 1 - autor</h5>
        <h5>Musica 2 - autor</h5>
        <h5>Musica 3 - autor</h5>
        <h5>Musica 4 - autor</h5>
      </div>
     
            

      <div className="footer-escala-aberta">
        <div className="date-ftr">
          <h2>Data</h2>
          <p>27/11/2022</p>
        </div>
        <div className="local-ftr">
          <h2>Local</h2>
          <p>Igreja</p>
        </div>
        <div className="hora-ftr">
          <h2>Horario</h2>
          <p> 17:30</p>
        </div>
      </div>
      <div className="btns-login-escala-aberta" >
            <button className="btn-login">✔ Confirmar</button>
            <button className="btn-login">🗙 Cancelar</button>
          </div>
    </div>
  );
}

export default EscalaAberta;
