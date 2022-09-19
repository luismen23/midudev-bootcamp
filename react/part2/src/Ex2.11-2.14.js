import './App.css';
import {useState, useEffect} from 'react';

const Country = ({countries, onClick, show, handleShow}) => {
        return (
            <div>
                <h2>{countries.name.common}</h2>
                {/* <button>{show ? 'Show Info' : 'Hide Info'}</button>    */}
                {/* {countries.filter((country) => {if (show === true) return true})}         */}
                <p>Capital: {countries.capital}</p>
                <p>Population: {countries.population}</p>
                <img src={countries.flags.png} alt="Country Flag" width={200}></img>
            </div>
        )
    
}

const Content = ({countries, query}) => {
    return (
        <div>
            {
                countries
                .filter((country) => (country.name.common.toLowerCase().includes(query)))
                .map((country, i) => (<Country key={i} countries={country}/>))
            }
        </div>
    )
}


const App = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(true);

    const handleChange = (event) => {
        setQuery(event.target.value);
    }
   
    
    useEffect(() => {
        setLoading(true);
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((json) => {
            setCountries(json);
            setLoading(false);
        })
    }, []);
    
    const handleShow = () => {
        setShow(() => !show);
    }

    return (
      <div>
        <b>{loading ? "CARGANDO ..." : ""}</b>
        <form>
            <label>
                FIND COUNTRIES: <input type="text" onChange={handleChange} value={query} placeholder='Search ...'/>
            </label>
        </form>
        <button onClick={handleShow}>{show ? 'Show Info' : 'Hide Info'}</button>
        <Content countries={countries} query={query}  show={show}/>
        
      </div>
    )
  }
  
  export default App