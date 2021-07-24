import React from 'react';


import {InputLabel, FormControl} from '@material-ui/core';

function OptionResetComponent(){

function reset(){
    window.location.reload();
}

    return (
        <>
                <FormControl style={{minWidth:'20px', width:'20px'}}>
                    <button onClick={() => reset()} style={{border:'0px',backgroundColor:'white'}}> <InputLabel style={{fontSize:'14px'}}>Reset</InputLabel></button>
                </FormControl>
        </>
    )}




export default OptionResetComponent;