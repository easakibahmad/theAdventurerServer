import React, { useEffect, useState } from 'react';
import Apply from '../ArrayObjApply/Apply';

// const obj = [{name: "mali", id:0, income: 22000, profession: "teaching"},
//                 {name: "ali", id:1, income: 22000, profession: "teaching"},
//                 {name: "bali", id:2, income: 21000, profession: "teaching"},
//                 {name: "cali", id:3, income: 23000, profession: "teaching"},
//                 {name: "hali", id:4, income: 24000, profession: "teaching"}];
const ArrayObj = () => {
    const [inputOne,inFunc]= useState([])
    useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>inFunc(data))
    },[])
    
    return (
        <div>
        {
            inputOne.map(c=> <Apply key={c._id} index={c}></Apply>)
        }
            {/* {
                obj.map(index=><Apply key={index.id} index={index}></Apply>)
            } */}
        </div>
    );
};

export default ArrayObj;