import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <div>
                <input type='text' name='city' placeholder='City name' />
                <input type='text' name='country' placeholder='Country name' />
            </div>
            <div>
                <button>Get Weather</button>
            </div>
        </form>
        )
}

export default Form;