import React from 'react';
import './Apply.css'
const Apply = (props) => {
    const {company, phone}=props.index
    return (
        <div className='applydiv'>
          <h1>name: {company}</h1>
          <h2>salary: {phone}</h2>
        </div>
    );
};

export default Apply;