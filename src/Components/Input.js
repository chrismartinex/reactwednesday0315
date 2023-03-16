import React, {useState} from 'react'

export default function Input(){

    const [inputVal, setInputVal] = useState('');
    const handleButtonClick = () => {
        alert(inputVal);
    };

    return (
        <>
            <input onChange={(e) => setInputVal(e.target.value)}type="text" />
            <button onClick={handleButtonClick}>Submit</button>
        </>
       
    ) 
ghgh

}