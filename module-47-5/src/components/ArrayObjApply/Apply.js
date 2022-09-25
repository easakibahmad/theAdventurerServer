import React, { useState } from 'react';
import './Apply.css'
const Apply = (props) => {
    const {company, phone}=props.index
    const [one, oneFunction]=useState(0)
    const addValue = ()=>oneFunction(one+1)
    return (
        <div className='applydiv'>
          <h1>name: {company}</h1>
          <h2>salary: {phone}</h2>
          <h4>Clock: {one}</h4>
          <button onClick={addValue}>Click to Plus</button>
        </div>
    );
};

export default Apply;