import React from 'react';

const Nemo = (props) => {
    const [count, setCount] = React.useState(3);
    const addNemo =() => {
        setCount(count +1);
    }

    const removeNemo =() => {
        setCount(count > 0 ? count -1: 0);
    }

    const nemo_count = Array.from({length: count}, (v, i)=>(i));
    return (
        <div className="App">
          {nemo_count.map((num, idx)=>{
            return (
              <div 
                key = {idx}
                style={{
                  width:'150px',
                  height:'150px',
                  backgroundColor: '#eee',
                  margin:'20px'
              }}>
                nemo
              </div>
            )
          })}
         
          <button onClick={addNemo}>하나추가</button>
          <button onClick={removeNemo}>하나빼기</button>
        </div>
      );
}

export default Nemo;