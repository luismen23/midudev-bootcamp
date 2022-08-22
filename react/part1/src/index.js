import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css'

const WarningNotUsed = () => <h1>Todavia no se ha usado el contador</h1>;

const ListOfClicks = ({clicks}) => <p>{clicks.join(', ')}</p>;

const INITIAL_STATE = { //lo hago haciendo el estado inicial counters, un objeto con dos valores
    left: 0,
    right: 0,
    mensaje: "Mensaje en el estado"
};

const App = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)  // colocare estos dos estados en uno solo, de la sig forma:

    const [counters, setCounters] = useState(INITIAL_STATE)  //siempre intentar tener lo minimo de estados posibles, el filter me puede ayudar 

    const [clicks, setClicks] = useState([])

    const handleClickLeft = () => {
        const newCountersState = { // puedo usar una variable para cambiar mi estado y pasarselo como parametro a mi setCounters
            ...counters,  // el spread operator me trae todas las propiedades del objeto y asi puedo cambiar solo las que necesito
            left: counters.left + 1,
        }
        setCounters(newCountersState)
        setClicks(prevClicks => ([...prevClicks, 'L']))
    }

    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
        })
        setClicks(prevClicks => ([...prevClicks, 'R']))
    }

    const handleReset = () => {
        setCounters(INITIAL_STATE)
        setClicks([]);
    }
  
    return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>
          left
        </button>
        <button onClick={handleClickRight}>
          right
        </button>
        {counters.right}
        <p>
            <button onClick={handleReset}>reset</button>
        </p>
        <p>Click Totales: {clicks.length}</p>
        <p>{counters.mensaje}</p>
        {clicks.length === 0 ? <WarningNotUsed/> : <ListOfClicks clicks={clicks}/>}
      </div>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);