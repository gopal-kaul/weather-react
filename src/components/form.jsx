import React from 'react';

const Form = (props) => {
    return (
        <div className="container">
        <div>{props.error?error:null}</div>
        <form onSubmit={e => props.loadweather(e)}>
            <div className="row">
                <div className="input-field col m3">
                    <input type='text' placeholder='City' name='city' autoComplete="off" />
                </div>
                <div className="input-field col m3">
                    <input type='text' placeholder='Country' name='country' autoComplete="off" /></div>
                <div className="col m3">
                    <button className='input-field waves-effect blue btn'>Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}
function error()
{
    return(
        <div className='alert alert-danger red'>
            Please enter correct city and country!
        </div>
    )
}
export default Form;