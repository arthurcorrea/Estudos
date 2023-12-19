import './App.css';
//* importando componente externo
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Arthur';
  const newName = name.toUpperCase();

  //? usando funções para colocar no JSX
  function sum(a, b) {
    return a+b
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, senhor React!</h1>
        
        <p>
          Primeiro projeto em React, aprendendo os conceitos iniciais.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Documentação do React
        </a>

        <span>Usando imagens com atributos variáveis:</span>
        <img src={url} alt="Imagem Placeholder" />

      </header>

      {/* este é um  comentário em JSX */}
      {/* apredendo o uso de JSX */}
      <section className="App-section01">
        <span>Alterando o próprio JSX (dentro de App.js)</span>
        <span>Também é possível colocar variáveis: {name}</span>
        <span>Também é possível colocar variáveis alteradas: {newName}</span>
        <span>É possível usar funções: {sum(2, 10)}</span>
      </section>


      {/* usando componente externo */}
      <section className="App-section01">
        <HelloWorld />
      </section>

    </div>
  );
}

export default App;