import './Paper.css';

function Paper({number}) {

  const click = ()=>{
    number(3)
  }

  return (
    <div className="paper">
        <div className='paper1'>

            <div className='paper2'>    
                <img src='https://srdch.ac.in/wp-content/uploads/2021/06/aishe-logo.jpg'></img>
                <img src='https://srdch.ac.in/wp-content/uploads/2021/02/dental-logo-ramakrishna-1.png'></img>
                <img src='https://www.pngitem.com/pimgs/m/165-1650595_clip-art-medical-symbol-hd-png-download.png'></img>
            </div>

            <div className='paper3'>
                <h1>Sri Ramakrishna Dental College & Hospital</h1>
                <h4>Departments of Dental Surgery</h4>
            </div>

            <div className='paper4'>
                <p>National Level Paper Presentation Competition Final Round going to be conducted on Sunday 18/06/2023 10:00AM with 25 selected candidates in The Conference Hall, Sri Ramakrishna Dental College and Hospital, Coimbatore - 641006</p>
                <h1>Topic: Nanodentistry</h1>
            </div>

            <div className='paper5'>
              <h2>DR. Dibyendu Mazumder</h2>
              <h5>President of Dental Council of India</h5>
              <p>Will be Cheif Guest</p>
            </div>

            <div className='paper6'>
              <div className='paper7'>
                <p>Dr. L. DEEPANANDAN  MDS</p>
                <p>Principal</p>
              </div>
              <div className='paper8'>
                <p>D.Lakshminarayanaswamy</p>
                <p>Managing Trustee</p>
              </div>
            </div>
            <p className='para1'>Will be the Guests Of Honour</p>

            <div className='para9'>
              <h5>Mr Bharath T</h5>
              <p>President – Student Council</p>
            </div>

            <div className='paper10'>
              <div className='paper7'>
                <p>Ajay Kannah K</p>
                <p>Vice President</p>
              </div>
              <div className='paper8'>
                <p>Subhasri R</p>
                <p>Secretary</p>
              </div>
            </div>
            <p className='para1'>Kindly grace the occasion with your esteemed presence</p>

        </div>

        <div className='paperclick'>
          <button onClick={click}>Next</button>
        </div>

        <div className='paper11'>

          <h4>List of Selected Candidates :</h4>

          <table>
            <tr>
              <th>Name</th>
              <th>College Registration No</th>
            </tr>
            <tr>
              <td>Yaazhan</td>
              <td>19bd091</td>
            </tr>
            <tr>
              <td>Mr. Vishnu</td>
              <td>18bd041</td>
            </tr>
            <tr>
              <td onClick={()=> alert('Why did you stole my heart ?😏')}>Naveen V</td>
              <td>20bds069</td>
            </tr>
            <tr>
              <td><a href='https://youtube.com/shorts/elDNCfkzQXg?feature=share'>Prasanna Dharshini SP</a></td>
              <td>D0120015</td>
            </tr>
            <tr>
              <td>Ashwin Tony S L</td>
              <td>17bd012</td>
            </tr>
            <tr>
              <td>Baalaji L</td>
              <td>809597</td>
            </tr>
            <tr>
              <td>Yaazhinhi D N</td>
              <td>475419</td>
            </tr>
            <tr>
              <td>Veronica R</td>
              <td>4101110281</td>
            </tr>
            <tr>
              <td>Preethi G</td>
              <td>4101125188 </td>
            </tr>
            <tr>
              <td>Prabavathi D</td>
              <td>644747</td>
            </tr>
            <tr>
              <td>Kaviya D</td>
              <td>928506</td>
            </tr>
            <tr>
              <td>Krishna Rekha K</td>
              <td>3701005146 </td>
            </tr>
            <tr>
              <td>Hema Priya V </td>
              <td>723438</td>
            </tr>
            <tr>
              <td>Jayashree D</td>
              <td>4102102289</td>
            </tr>
            <tr>
              <td>Ganesan Anusha</td>
              <td>711913</td>
            </tr>
            <tr>
              <td>Huzaifa Fathima Z</td>
              <td>4108001351</td>
            </tr>
            <tr>
              <td>Harrini R</td>
              <td>4101208301 </td>
            </tr>
            <tr>
              <td>Kalaiyarasi M K</td>
              <td>4102207517</td>
            </tr>
            <tr>
              <td>KISHORE L</td>
              <td>756017</td>
            </tr>
            <tr>
              <td>LOKESH K</td>
              <td>717323</td>
            </tr>
            <tr>
              <td>MONISH B</td>
              <td>17bd030</td>
            </tr>
            <tr>
              <td>Nihanausheen N</td>
              <td>20bds069</td>
            </tr>
            <tr>
              <td>Ranjana N</td>
              <td>8bd041</td>
            </tr>
            <tr>
              <td>Roshini P</td>
              <td>17bd016</td>
            </tr>
          </table>

          <p className='para2'>**Note:- Candidates will be provided with food and accommodation</p>
        </div>

    </div>
  );
}

export default Paper;
