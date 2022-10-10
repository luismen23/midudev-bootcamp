import './App.css';
import {useState , useEffect} from 'react';  // utilizamos useEffect para controlar cuando se ejecuta el fetch y cada vez que se renderiza nuestro componente
import {Note} from './Note.js'; //asi importamos un modulo. podemos colocarle el nombre que queramos


function App() { //cuando voy a recorrer un array con .map, siempre tiene que llevar una key, es algo interno de react
  // las key, tienen que ser un identificador unico.
  //se puede renderizar un array de una vez, pero es mas leible jsx

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  // const [showAll, setShowAll] = useState(true);
  const [loading, setLoading] = useState(false)

  /* utilizo el setTimeout para ver como se renderiza primero mi app sin el fetch y 
  luego es que se renderiza el useEffect y aparecen las notas. esto pasa porque mi app esta siendo asincrona, o sea
  no espera por el use effect a que se renderice(ya que dura un poco la peticion poque le decimos que dure 2segs en hacerlo), 
  va renderizando todo lo que encuentre en su camino al momento */
  useEffect(() => {
    setLoading(true);
    setTimeout(() => { 
      fetch('https://jsonplaceholder.typicode.com/posts')  // el fetch es asincrono o sea qeu no espera por mi app para que se renderize, por eso usamos el useEffect
      .then((res) => res.json())
      .then((json) => {
        setNotes(json);
        setLoading(false);
      });
    }, 2000);
  }, [])
  /*Las dependecias en el useEffect es para controlar cuando se va a renderizar en si, 
  aqui le estamsos pasando newNote, y cada vez que agregemos una nota el useEffect se ejecutara, 
  en resumen este efecto depende del valor de newNote, si este cambia, vuelve a utilizar el efecto*/
  
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault(); // tengo que colcocar esto para que evite su comportamiento normal,
    // ya que el form siempre que le hacemos el submit nos recarga la paigna porque envia los datos con un "post"
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };
   // con este nuevo fetch, estoy creando la nota pero de una vez en el servidor(con el metodo post)
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(noteToAddToState),
    headers: {'Content-type': 'application/json; charset=UTF-8',},
    })
    .then((response) => response.json())
    .then((json) => setNotes(prevNotes => prevNotes.concat(json)));  //aqui estoy concatenando mis notas anteriores a la respuesta que me da el fecht que es la nueva nota
   

    // setNotes([...notes, noteToAddToState]);
    setNewNote("");
  }
  
  // const handleShowAll = () => {
  //   setShowAll(() => !showAll);
  // };

  // if (notes.length === 0) return "hola esperando por el useEffect";

  return (
    <div>
      <h2>My Notes</h2>
      {/* <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show all"}</button> */}

      {loading ? "Cargando..." : ""}
      <ol>
        {notes
        // .filter((note) => { if (showAll === true) return true;  // el filter deberia volver siempre un boolean
        // return note.important === true; 
        // })
        .map((note) => (<Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}> 
        <input type="text" onChange={handleChange} value={newNote} />
        <button>New Note</button>
      </form>
    </div>
  );
}
// cuando colocamos el handleSubmit en el form ya no es necesario utilizar el handleClick
// tener claro que el ultimo boton de un formulario funciona como un submit.
export default App;
