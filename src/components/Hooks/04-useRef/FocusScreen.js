import React, { useRef } from 'react';
import './useRef.css';


export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(ref);

    const handleClick = () => {
        inputRef.current.select();//El select de un objeto HTML, lo selecciona y ubica el focus en él 
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Your name"
            />


            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>

        </div>
    )
}
