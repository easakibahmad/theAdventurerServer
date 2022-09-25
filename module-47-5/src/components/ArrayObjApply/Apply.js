import React, { useState } from 'react';
import './Apply.css'
const Apply = (props) => {
    const {company, phone,_id}=props.index
    const [one, oneFunction]=useState(0)
    const addValue = (id)=>{
        // console.log('clicked')
        oneFunction(one+1)}

    const addValueTwo = ()=>{
        addValue(_id)
        console.log('clicked  '+_id)
    }
    return (
        <div className='applydiv'>
          <h1>name: {company}</h1>
          <h2>salary: {phone}</h2>
          <h4>Clock: {one}</h4>
          <button onClick={addValueTwo}>Click to Plus</button>
        </div>
    );
};

export default Apply;