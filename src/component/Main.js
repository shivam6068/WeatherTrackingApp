import React from 'react'
import './Main.css';

function Main() {
    return (
        <>
            <div id="maindiv" className="Main">
                <div id="innerdiv">
                    <div id="innerdiv1">
                        <h2 className="heading">Weather Finding App</h2>
                        <hr />
                        <input className="input" type="text" placeholder="Write city name" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Main;