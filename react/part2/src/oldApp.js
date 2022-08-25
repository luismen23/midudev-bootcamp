import './App.css';
import {Note as Lolo} from './Note.js'; //asi importamos un modulo. podemos colocarle el nombre que queramos

const notes = [
  {
    id: 12,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
    categories: ["sports", 'movies']
  },
  {
    id: 20,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 33,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]



function App() { //cuando voy a recorrer un array con .map, siempre tiene que llevar una key, es algo interno de react
  // las key, tienen que ser un identificador unico.
  //se puede renderizar un array de una vez, pero es mas leible jsx
  return (
    <ol>
      <h2>My Notes</h2>
      {notes.map((note) => (<Lolo key={note.id} {...note} />
      ))}
    </ol>
  );
}

export default App;
