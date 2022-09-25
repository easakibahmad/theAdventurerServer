import React from 'react';

const Apply = (props) => {
    const {name, income}=props.index
    return (
        <div>
          <h1>name: {name}</h1>
          <h2>salary: {income}</h2>
        </div>
    );
};

export default Apply;