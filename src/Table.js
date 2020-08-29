import React from 'react';
import './Table.css';
import numeral from 'numeral';

function Table({countries}) {
    return (
        <div className="table">
            { 
              countries.map(country => (
                <tr>
                  <td>{<img className="table__flag" src={country.countryInfo.flag} alt="Loading"/>}<span className="table__flagName">{country.country}</span></td>
                  <td><strong>{numeral(country.cases).format("0,0")}</strong></td>
                </tr>
              ))  
            }
        </div>
  )
}

export default Table;
