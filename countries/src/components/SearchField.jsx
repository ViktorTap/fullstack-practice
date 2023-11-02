const SearchField = ({ searchFieldInput, setSearchFieldInput }) => {

  return (
    <div>
        
        <h2>SearchField</h2>
        <input 
        value={searchFieldInput}
        onChange={(event) => setSearchFieldInput(event.target.value)}
        />
        

    </div>
  )
}

export default SearchField