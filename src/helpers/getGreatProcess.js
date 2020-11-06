export const greatProcess = ( iterations ) => {

    for( let i = 0; i < iterations; i ++ ){
        console.log('Go it....');
    }

    return `${ iterations } iterations done.`;
}