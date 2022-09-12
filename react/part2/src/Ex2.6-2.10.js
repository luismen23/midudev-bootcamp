import './App.css';
import {useState} from 'react';

const Person = ({name, number}) => <li>{name} {number}</li>
;

const FormPersons = ({handleChange, handleSubmit, handleNumber, newName, newNumber}) => {
  return (
    <form type='text' onSubmit={handleSubmit}>
    <div>
      name: <input onChange={handleChange} value={newName}/>
    </div>
    <div>
      number: <input onChange={handleNumber} value={newNumber}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Content = ({persons}) => {
  return (
    <ul>
      {persons.map((person, i) => <Person key={i} name={person.name} number={person.number}/>)}
    </ul>
  )
}


const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')

    const handleChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumber = (event) => {
        setNewNumber(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const personToAddToState = {
          name: newName,
          number: newNumber
        };
        
        setPersons([...persons, personToAddToState]);
        setNewName('');
        setNewNumber('');
    };

    return (
      <div>
        <h2>Phonebook</h2>
        <FormPersons handleSubmit={handleSubmit} handleChange={handleChange} handleNumber={handleNumber}/>
        <h2>Numbers</h2>
        <Content persons={persons} />    
      </div>
    )
  }
  
  export default App