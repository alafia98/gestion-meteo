import React from "react";
import {WiHumidity, WiStormWarning, WiDayFog} from 'react-icons/wi';
import {FaCity} from 'react-icons/fa';
const Weather = (props) => {
        return (
            <div className = "info">
                <div>
                    {
                        props.city && 
                        <p className='info_key'> city: 
                        <span className='info_value'><FaCity className='icons'/> {props.city}</span>
                        </p>
                    }
                </div>
                <div>
                    {
                        props.country && 
                        <p className='info_key'> country: 
                        <span className='info_value'><WiStormWarning className='icons'/> {props.country}</span>
                        </p>
                    }
                </div>
                <div>
                    {
                        props.humidity && 
                        <p className='info_key'> humidity:
                        <span className='info_value'><WiHumidity className='icons' /> {props.humidity}</span>
                        </p>
                    }
                </div>
                <div>
                    {
                        props.description && 
                        <p className='info_key'> description:
                            <span className='info_value'><WiDayFog className='icons'/>{props.description}</span>
                        </p>
                    }
                </div>
                <div>
                    {
                        props.error && 
                        <p className='info_key'> error: 
                            <span className='info_value'>{props.error}</span>
                        </p>
                    }
                </div>
            </div>
        )
}

export default Weather;