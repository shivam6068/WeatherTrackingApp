import React from 'react'
import './Main.css';
import { useState} from 'react';
function Main() {
    const [cityname1, setcityname1] = useState('')
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