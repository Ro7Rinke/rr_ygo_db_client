import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className='container-search-box' >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <input className='search-box' placeholder="Search..."/>
            <button type='submit' className='button-search-box fa fa-search'></button>
        </ div>
    )
}

export default SearchBox