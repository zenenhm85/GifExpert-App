import React, { useCallback } from 'react'
import { Son } from './Son'
import { useState } from 'react';

export const Father = () => {

    const number = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    const increment = useCallback(( num ) => {
        setValue(c => c + num );
    },[setValue]);

   


    return (
        <div>
            <h1>Father</h1>
            <p> Total: { value } </p>

            <hr />

            {
                number.map( n => (
                    <Son 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Son /> */}
        </div>
    )
}
