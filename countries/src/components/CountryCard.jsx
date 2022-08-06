import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({country}) {

    return (
        <div className="card my-2">
            <img src={country.flags.svg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <Link to={`${country.name.common}`} className="btn btn-primary">More Details</Link>
            </div>
        </div>
    )
}

export default CountryCard