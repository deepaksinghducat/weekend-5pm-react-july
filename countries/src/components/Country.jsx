import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Country() {

  const { name } = useParams();

  const [country, setCountry] = useState([]);

  const getCountry = useCallback(async () => {
    let response = await fetch(`https://restcountries.com/v3.1/name/${name.toLowerCase()}`);

    response = await response.json();

    setCountry(response);
  },[name]);

  useEffect(() => {
    (async() => {
      await getCountry()
    })();
  }, [name])

  return (
    <div>
      <div className="container my-5">
        <div className="bg-light p-5 rounded">
          <div className="col-sm-8 py-5 mx-auto">
            <h1 className="display-5 fw-normal">{country[0] ? country[0].name.common : ''}</h1>
            <p className="fs-5">{country[0] ? country[0].name.common : ''} </p>
            <img src={country[0] ? country[0].flags.png : ''} alt="" />
            <br/>
            <Link to='/'>Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Country)