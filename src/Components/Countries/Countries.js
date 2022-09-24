import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "./Country";
const Countries = () => {
  const [countries, setCountry] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) =>
      res.json().then((data) => setCountry(data))
    );
  }, []);
  return (
    <div className="Countries">
      {
        countries.map(country => <Country country={country}
            key = {country.cca3}
             ></Country> )
      }
    </div>
  );
};

export default Countries;
