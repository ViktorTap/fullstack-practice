import SearchField from "./components/SearchField"
import DisplayCountries from "./components/DisplayCountries";
import countryService from './services/countries.js'

import { useState, useEffect } from 'react'

function App() {
  const [searchFieldInput, setSearchFieldInput] = useState('')
  const [countriesToDisplay, setCountriesToDisplay] = useState([])

  useEffect(() => {
    countryService
      .getAllCountries()
      .then(countries => {
      setCountriesToDisplay(countries)
    })
  }, [])
  
  return (
    <>
      <h1>HELLO</h1>
      <SearchField 

        searchFieldInput={searchFieldInput} 
        setSearchFieldInput={setSearchFieldInput}
      />

      <DisplayCountries 
        countriesToDisplay={countriesToDisplay}
        searchFieldInput={searchFieldInput}   
      />
    </>
  )
}

export default App
