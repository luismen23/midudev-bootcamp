import './App.css';
import Mensaje from './Mensaje.js'


const Description = () => { // estos componentes siempre tienen que ir fuera del que esta siendo renderizado, en este caso App()
  return <p>Esta es la app del curso fullstack bootcamp de midudev youtube</p>
} 


function App() { // esto es un componente, es una parte de la UI que es reutilizable
  return ( //esta forma de escribir HTML en JS, se llama JSX
    <div className="App">
      <Mensaje color='red'message='Estamos trabajando '/>  
      <Mensaje color='green' message='desde un curso'/>  
      <Mensaje color='blue' message='de React, usando los params o props '/>  
      <Description />
    </div>
  );
}

export default App;
