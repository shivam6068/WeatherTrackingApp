import React from 'react'
import './Main.css';
import { useState, useEffect } from 'react';
function Main() {

    const [cityname1, setcityname1] = useState('');


    const [res, setres] = useState(null)


    const [res1, setres1] = useState(null)


    useEffect(() => {
        const fetchapi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname1}&appid=726d57efdf52beca6ba6257da22fca8d`;
            const response = await fetch(url);
            const resjson = await response.json();
            console.log(resjson)
            setres(resjson.main);
            setres1(resjson.wind);
            // console.log(resjson.main);
        }
        fetchapi()

    }, [cityname1])
    return (
        <>
            <div id="maindiv" className="Main">
                <div id="innerdiv">
                    <div id="innerdiv1">
                        <h2 className="heading">Weather Finding App</h2>
                        <hr />
                        <input className="input" type="text" placeholder="Write city name" onChange={(event) => { setcityname1(event.target.value) }} value={cityname1} />
                    </div>
                    {!(res && res1) ? (<p>not found</p>) : (<div id="innerdiv2">
                        <h3 id="cityname">{cityname1}</h3>
                        <h2 className="text">
                            Temperature-{(res.temp - 273.15).toFixed(2)} celcius
                        </h2>
                        
                        <h4 className="text"> Min_temp :{(res.temp_min - 273.15).toFixed(2)} Celcius  || Max_temp :{(res.temp_max - 273.15).toFixed(2)} Celcius</h4>
                        {/* <button className="button" onClick={(event) => { setcityname1(cityname) }}>Find</button> */}
                        <h4 className="text">humidity:{res.humidity} % || pressure:{(res.pressure / 33.864).toFixed(2)
                        } hg </h4>
                    </div>)}

                </div>
            </div>

        </>
    )
}

export default Main;