import React from 'react'

export const Son = React.memo(({ number, increment }) => {

    console.log('  Myself again :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increment( number ) }
        >
            { number }
        </button>
    )
})
