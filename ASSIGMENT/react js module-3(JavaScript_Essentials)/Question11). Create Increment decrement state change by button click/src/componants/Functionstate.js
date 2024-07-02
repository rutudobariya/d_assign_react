import { useState } from "react";
import React from "react";
function Functionstate() {
    const [count, setCount] = useState(0);
    return (
        <div className="countcontainer">
            <div className="p-5 maincontainer" bg-success align="center">
                <div>
                    <h1>React Web</h1><br />
                    <h2 className="text-white">{count} </h2><br />
                    <button className="btn btn-md btn-outline-dark" onClick={() => setCount(count + 1)}>
                        Increment
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-md btn-outline-dark" onClick={() => setCount(count - 1)}>
                        Decrement
                    </button> <br />
                    <button className="btn btn-md btn-outline-dark mt-3" onClick={() => setCount(0)}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Functionstate;

