import './EscalaAberta.css'
import MusicoInstrumento from './MusicoInstrumento'
function EscalaAberta() {
    return (
        <div className="containeri">
            <div className="header">
                <h2>Nome da Escala</h2>
            </div>


            <div className='corpo'>
                <MusicoInstrumento />
                <MusicoInstrumento />
                <MusicoInstrumento />
                <MusicoInstrumento />
            </div>

            <div className='corpo-musicas'>

            </div>


            <div className='footer'>

            </div>
        </div>
    )
}

export default EscalaAberta;