import './App.css';
import Cabecalho from './components/Cabecalho';
import Caixas from './components/Caixas';
import Itens from './components/Itens';
import jbl from './assets/jbl.jpg'
import cel from './assets/celular.jfif'
import apd from './assets/airpod.jfif'

function App() {
  return (
    <div>
      <header>
        <Cabecalho />
      </header>
      <section id='meio'>
        <Caixas />
        <Itens  produto='Caixa de Som' foto={jbl} fabricante='JBL' preco='R$540,00' /> <br/>
        <Itens  produto='Celular' foto={cel} fabricante='Apple' preco='R$2.500,00' /> <br/>
        <Itens  produto='Airpod' foto={apd} fabricante='Apple' preco='R$600,00' /> <br/>
      </section>
    </div>
  );
}

export default App;
