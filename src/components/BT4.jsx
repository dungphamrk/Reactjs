import React from 'react';

const ColorBox = () => {
    return (
        <>
        <h1>Bai 4</h1>
            <div style={{display:'flex', gap: '100px'}}>
                 <div style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'blue' 
                }}></div>
                <div style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'red' 
                }}></div>
                <div style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'green' 
                }}></div> 
            </div>
           
        </>
       
    );
}

export default ColorBox;
