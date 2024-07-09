import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../api/api';
import Card from '../Card/Card';
import './CountryList.css';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getCountries();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="country-list">
      {countries.map(country => (
        <Card key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
