import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    const {name, flags} = props.country
    return (
        <div className='Country'>
            <h1>{name}</h1>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;