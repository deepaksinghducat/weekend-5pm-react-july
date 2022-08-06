import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import CountryCard from './CountryCard';

function CountryList() {

    const [countryList, setCountryList] = useState([]);

    const countryLists = async () => {
        let response = await fetch('https://restcountries.com/v3.1/all');

        response = await response.json();

        setCountryList(response);
    }

    useEffect(() => {
        countryLists();
    },[])

    return (
        <Fragment>
            {
                countryList.length > 0 ? countryList.map((country, index) => (
                    <div className="col-sm-4" key={index}>
                        <CountryCard country={country} />
                    </div>
                )) : (<div>fsafdsdaf</div>)
            }
        </Fragment>
    )
}

export default CountryList