import React from 'react';
import '../App.css'
import { WiDaySunny, WiDayThunderstorm, WiRain, WiRaindrops, WiSnow, WiCloudy } from 'weather-icons-react';
const Weather = (props) => {
    return (
        <div className="container">
            <div className="center">
                <h1>{props.city}, {props.country}</h1>
                {IconShow(props.icon)}

                <h3>{props.celsius}&deg;</h3>
                {MinMaxTemp(props.min, props.max)}
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}
function IconShow(n) {
    if (n >= 200 && n <= 232) {
        return <WiDayThunderstorm size={100} color='#000' />
    }
    else if (n >= 300 && n <= 321) {
        return <WiRaindrops size={100} color='#000' />
    }
    else if (n >= 500 && n <= 531) {
        return <WiRain size={100} color='#000' />
    }
    else if (n >= 600 && n <= 622) {
        return <WiSnow size={100} color='#000' />
    }
    else if (n == 800) {
        return <WiDaySunny size={100} color='#000' />
    }
    else{
        return <WiCloudy size={100} color='#000' />
    }
}
function MinMaxTemp(min, max) {
    return (

        <div className="center">
            <h3>{min}&deg; {max}&deg;</h3>

        </div>
    )
}
export default Weather