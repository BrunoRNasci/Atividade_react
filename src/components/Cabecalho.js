import './Cabecalho.css'
import logo from '../assets/lion.jpg'
function Cabecalho(){
    return(
        <div id='cabecalho'>
            <img src={logo} alt='logo_lion'></img>
            <button>Login</button>
            <h1>Entre com seus Dados</h1>
            <input type='text' value='Entre com seu nome'  />
            <br/>
            <input type='text' value='Entre com seu endereço' />
            <br/>
            <input type='text' value='Entre com seu telefone'  />
            <br/>
            <input type='text' value='Entre com seu CEP'  />
            <input type='button' value='Enviar' id='enviar' />
        </div>
    )
}

export default Cabecalho