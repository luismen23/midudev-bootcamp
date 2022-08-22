import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from "./reportWebVitals";


const Statistics = ({sumTotal, average, positive, good, neutral, bad}) => { 

  return (
    <div>
      <tbody>
        <tr><th>Good: </th><td> {good}</td></tr>
        <tr><th>Neutral: </th><td> {neutral}</td></tr>
        <tr><th>Negative: </th><td> {bad}</td></tr>
        <tr><th>All: </th><td> {sumTotal}</td></tr>
        <tr><th>Average: </th><td> {average}</td></tr>
        <tr><th>Positive: </th><td> {positive}%</td></tr>
      </tbody>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(prevState => prevState + 1)
  const handleClickNeutral = () => setNeutral(prevState => prevState + 1)
  const handleClickBad = () => setBad(prevState => prevState + 1)
  const sumTotal = good + neutral + bad
  const average = (good - bad) / sumTotal
  const positive = ((good * 1)/ sumTotal) * 100
  
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      { sumTotal === 0 ?  (<p>No feedback given</p>)  :
      (<Statistics sumTotal={sumTotal} average={average} positive={positive} good={good} neutral={neutral} bad={bad}/>)
      }
      
    </div>
  )
}

ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>, 
  document.getElementById('root')
)
reportWebVitals();