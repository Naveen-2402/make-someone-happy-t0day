import './App.css';
import Front from './Front';
import Load from './Load';
import Paper from './Paper';
import Smile from './Smile';
import Ticket from './Ticket';
import { useState } from 'react';

function App() {

  const [handlenum, sethandlenum] = useState(0)

  const handlenumber =(e)=> {
    sethandlenum(e)
  }

  return (
    <div className="app">
      {/*<Front/>*/}
      {/*<Load/>*/}
      {/*<Ticket/>*/}
      {/*<Paper/>*/}
      {/*<Smile/>*/}
      { handlenum==0 ? <Front number={handlenumber}/> : null}
      { handlenum==99 ? <Load number={handlenumber}/> : null}
      { handlenum==1 ? <Ticket number={handlenumber}/> : null}
      { handlenum==2 ? <Paper number={handlenumber}/> : null}
      { handlenum==3 ? <Smile/> : null}
    </div>
  );
}

export default App;
