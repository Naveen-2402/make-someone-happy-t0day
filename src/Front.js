import './Front.css';
import { useState } from 'react';

function Front({number}) { 

  const click = ()=>{
    number(99)
  }

  return (
    <div className="front">
      <div className='frontcard'>
        <div className='fronttext'>
          Make Some One Happy Today....!
        </div>
        <div className='frontclick'>
          <button className='frontbutton' onClick={click}>Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default Front;
