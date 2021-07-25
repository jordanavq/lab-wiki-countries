import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            key={country.cca3}
            className=" list-group-item list-group-item-action"
            to={`/${country.cca3}`}
          >
            {country.flag} {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
