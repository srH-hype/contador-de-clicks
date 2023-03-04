import './App.css';
import freeCodeLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () =>{
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeLogo}
        alt='logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick}/>
        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
