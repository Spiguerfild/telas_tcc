import './MusicoInstrumento.css'

function MusicoInstrumento() {
    return (
        <div className='div-musico-instrumento'>
            <div className='selects'>


                <select name="select" id="nomes-musicos">
                    <option value="nome">Luis</option>
                    <option value="nome">Caio</option>
                    <option value="nome">pedro</option>
                    <option value="nome">jhon</option>
                </select>


                <select name="selecto" id="nomes-instrumentos">
                    <option value="nome">Violão</option>
                    <option value="nome">Guitarra</option>
                    <option value="nome">Teclado</option>
                    <option value="nome">Bateria</option>
                </select>
            </div>
            <div className='botoes'>
                <button>X</button>
            </div>
        </div>
    )
}
export default MusicoInstrumento;