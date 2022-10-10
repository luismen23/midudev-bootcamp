/*
EN LA CONSOLA
npm install -g npm = me instala la ultima actualizacion de npm
npm init -y = para iniciar un proyecto de node
node -v = para ver la version actual de node
npm install nodemon -D = para instalar nodemon que me permite reflejar los cambios sin necesidad de cerrar y abrir el server
npm run dev = una vez que ya haya anadido a package.json el nodemon, ejcuto esto
npm install express = para instalar express
npm install express -E = para instalar express pero no me coloca el caret en el .json. es la version exacta

PACKAGE.JSON
tengo que anadir en el package.json, en los scrips, start: node y el archivo que quiero que se ejecute cada vez que vaya a hacer npm start
y tambien anadir dev: nodemon y el archivo que quiero que se rfresque cada vez que haga un cambio

SEMANTIC VERSIONING EN DEPENDENCIAS DE NPM
"express": "^4.18.1"   
el ultimo numero(el patch o hotfix) significa que si sube han arreglado un problema en la dependencia
el segundo numero(la minor) aumenta cuando anaden una nueva feature a la dependencia
el primer numero(la mayor) las versiones que cambian totalmente el contrato que tiene el paquete o dependencia
^(caret) hasta cierto punto esta dependencia se va a actualizar automaticamente (mejor quitarlo cuando se comienza)
*/

//               NODE
// aqui creamos nuestro primer servidor con Node
// const http = require('http')

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })  // el content type tiene que ser este cuanto mande json (es el tipo de dato que estamos enviando)
//   response.end(JSON.stringify('Hello World MAMAII'))
// })

// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)

//              EXPRESS

// const { response, request } = require('express')
const express = require('express')
const app = express()

const notes = [
  {
    "id": 1,
    "nombre": "Luis",
    "apellido": "Mendoza"
  },
  {
    "id": 2,
    "nombre": "Cele",
    "apellido": "Quiroz"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/notes/', (request, response) => {
  response.json(notes)
})

//asi creamos una propidad/objeto/segmento dinamico/a
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  
  if (note) {
    response.json(note)
  }else {
    response.status(404).end()
  }
})

// para realizar un delete necesitamos insomnia o postman
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

// el servidor en express es asincrono entonces se pasa como callback que dice
// cuando termine el servidor de levantarse se ejcuta el console.log
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
