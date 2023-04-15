import React from 'react'
import outdoor from '../outdoor.json'

import { useState, useEffect } from 'react'
// Here map and key are used to fetch spa, images and title from the local json file 
function OutdoorSpa() {
    const [spas, setSpas] = useState([])

    useEffect(() => {
        setSpas(outdoor)
    }, [])

    return (

        <div className="spa-container">

            {spas.map((spa) => (
                <div key={spa.id} className="spa-collection">
                    <img src={spa.pic} alt={spa.title} />

                    <div className="spas-info">
                        <h3>{spa.title}</h3>
                        <p>{spa.price}</p>
                        <button class="button">More Details</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OutdoorSpa
