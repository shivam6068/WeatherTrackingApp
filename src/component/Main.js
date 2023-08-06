import React from 'react'
import './Main.css';
import { useState, useEffect } from 'react';
function Main() {
    
    const [cityname1, setcityname1] = useState('');


    const [res, setres] = useState(null)


    const[res1,setres1] = useState(null)


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
                        <input className="input" type="text" placeholder="Write city name" onChange={(event) => { setcityname1(event.target.value) }} value={cityname1}/>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Main;