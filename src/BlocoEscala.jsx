import "./BlocoEscala.css";


import guitar_png from './assets/purepng.com-electric-guitarelectric-guitarsteelstringselectrical-1421526493470zht6x.png'
function BlocoEscala() {
  return (
    <div className="container">
      <div className="block">
        <header className="top-block">
          <h3>Nome da Escala</h3>
        </header>

        <div className="bottom-block">
          <div className="lado-esquerdo">
            <img className="foto-esquerda" src={guitar_png} width={150} />
          </div>

          <div className="lado-direito">
            <h5>Data:  27/11/2022</h5>
            <h5>Local: Igreja</h5>
            <h5>Horario: 17:30</h5>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlocoEscala;
