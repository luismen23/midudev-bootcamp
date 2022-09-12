import './App.css';
import {Course} from './Course.js'

// exercises 2.1-2.5
const course = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: 
    [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 25,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 30,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 41,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: 
    [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2,
      },
    ],
  }
]

const initialValue = 0
const totalExercises1 = course[0].parts.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.exercises;
  }, initialValue);

  const totalExercises2 = course[1].parts.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.exercises;
  }, initialValue);  

const App = () => {
    return (
        <div key={course.id}>
            <Course name={course[0].name} parts={course[0].parts} />
            <p><strong>Total of {totalExercises1} exercises</strong></p>

            <Course name={course[1].name} parts={course[1].parts} />
            <p><strong>Total of {totalExercises2} exercises</strong></p>
        </div>
  )}

export default App;