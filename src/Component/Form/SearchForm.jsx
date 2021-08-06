import React from 'react';

const SearchForm = ({searchHandleChange}) => {
    return (
        <div className="row mt-3">
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search</label>
                    <input id="search" type="text" className="form-control" name="search" onChange={searchHandleChange} />
                </div>
            </form>
        </div>
    )
}

export default SearchForm;