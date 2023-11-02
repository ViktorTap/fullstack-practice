import SingleCountryData from "./SingleCountryData";

const DisplayCountries = ({ countriesToDisplay, searchFieldInput  }) => {

    const filteredCountries = countriesToDisplay.filter(country =>
    country.name.common.toLowerCase().includes(searchFieldInput.toLowerCase()));

    console.log(filteredCountries.length)
    console.log(searchFieldInput)
  return (
    <div>
        <h2>DisplayCountries</h2>
        <section>
            {filteredCountries.length === 1
            ? <SingleCountryData countryToDisplay={filteredCountries} />
            : filteredCountries.length <= 10 
            ? <p>Now there is under 10 countries</p>
            : <p>There is too matches, specify another filter</p> }
        </section>
    </div>
  )
}

export default DisplayCountries