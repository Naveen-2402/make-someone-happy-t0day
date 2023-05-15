import './Smile.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Smile() {
  return (
    <div className="smile">
      
      <div className='smilecard'>

        <div>
          You are Going To Make Someone Happy on 18 June 
        </div>

        <div className='smilepopup'>
          <Popup trigger={<a>😍</a>}
            position="right center">
            <div>Pechellam thaalatu pola Ennai uranga vaikka nee ingu illai 🥺</div>
          </Popup>
        </div>

      </div>

    </div>
  );
}

export default Smile;
