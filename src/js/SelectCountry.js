import React from 'react';

const SelectCountry = ({data,onSelect}) => {
    if(data == null){
        return (<div id="SelectCountry" className="dropdown pull-right">
        <button id="dLabel" className="btn btn-primary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {`Loading `}<span className="caret"></span>
        </button></div>)
    }

    let countries = [];
    data.map(d => {
        countries.push(d.country);
    });


    let uniqCountries = [...new Set(countries)];
    uniqCountries  = uniqCountries.filter(function(entry) { return entry.trim() != ''; }); //remove "" empty
    uniqCountries.sort((a, b) => a.localeCompare(b) );

    //console.log(uniqCountries);
    return (
        <div id="SelectCountry" className="dropdown pull-right">
            <button id="dLabel" className="btn btn-primary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {`Filter by Country `}<span className="caret"></span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dLabel">
                <h2>Filter By Country</h2>
                <ul className="is-flex">
                    {
                        uniqCountries.map(z => {
                            return ( <li
                                onClick={(e) => onSelect(e)}
                                key={z}
                            >{z}</li> );

                        })
                    }
                    <li className="clearfix"></li>
                </ul>
            </div>

        </div>
    );
};

export default SelectCountry;
