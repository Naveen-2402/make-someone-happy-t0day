import { useEffect } from 'react';
import './Load.css';
import { useState } from 'react';

function Load({number}) {

    const [next, setnext] = useState(0)

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const counttimer = async event =>{
        await delay(10000)
        console.log("Give me my heart Back...!")
        setnext(1)
    }

    useEffect(() => {
        counttimer()
    }, []);

    const counttimer2 = async event =>{
        await delay(10000)
        number(1)
        alert('Everything was scheduled and arranged')
    }

    if(next == 2){
        counttimer2()
    }

  return (
    <div className="load">
      
      {next == 0 ? 
      <div className='loadif1'>
      <div className='loader'>
        <div class="lds-ripple"><div></div><div></div></div>
      </div>
      <div className='loadtext'>
        Searching For A Match
      </div> 
      </div> : null }

      {next == 1 ? 
      <div className='loadif1'>
        <div className='loadtext'> Found a Match Press the Heart to Proceed</div>
        <div class="lds-heart" onClick={()=> setnext(2)}><div></div></div>
      </div> : null }


      {next == 2 ? 
      <div>
        <div className='loadif1'>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <div className='loadtext'>Building the Connection and Making required Arrangements</div>
        </div>
      </div>: null }

    </div>
  );
}

export default Load;
