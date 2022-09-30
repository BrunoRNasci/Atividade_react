import './Itens.css'

function Itens({produto, foto, fabricante, preco}){
    return(
        <div id='itens'>
            <h2>Produto: {produto}</h2>
            <img src={foto} alt='teste_props' />
            <p>Fabricante : {fabricante}</p>
            <p>Preço: {preco}</p>
        </div>
    )
}

export default Itens