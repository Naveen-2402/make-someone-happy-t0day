import './Ticket.css';

function Ticket({number}) {

    const click = ()=>{
        number(2)
    }

  return (
    <div className="ticket">
    <div className='ticketwhite'>

        <div className='ticket1'>
            
            <div className='ticket11'>
                <h2>Ticket Details</h2>
                <p>Booking ID: QE589090341</p>
            </div>
            <div className='ticket12'>
                <img src="https://www.icicibank.com/content/dam/offers/mmtlogo.png"></img>
            </div>
            <div className='ticket13'>
                <img src="https://zeevector.com/wp-content/uploads/IRCTC-Logo-PNG-Color.png"></img>
            </div>
            
        </div>
        <div className='ticket2'>
                <div className='ticket3'>
                    <div className='ticket4'>
                        <table>
                            <tr>
                                <td><b>PNR:</b> 4214476123</td>
                                <td><b>Class:</b>1A </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><b>Train Name and Number :</b> 12511/Raptisagar Exp</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><b>From :</b> MGR Chennai Ctl (MAS)</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><b>To :</b> Coimbatore Main Junction (CBE)</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><b>Date of Journey :</b> 17/06/2023 11:15 PM</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><b>Date of Arival :</b> 18/06/2023 06:47 AM</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><b>Transaction ID :</b> 3RJNI022000800594</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>1 Adult,0 Childern</td>
                                <td><b>Fare:₹1960</b></td>
                            </tr>
                        </table>
                    </div>

                    <div className='ticket5'>
                        <h3>Passanger Details</h3>
                        <div className='ticket6'>
                        <table>
                            <tr>
                                <th>Name</th>
                                <td>PRASANNA DHARSHINI SP</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Age& Sex</th>
                                <td>21 / F</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Coach/ Berth</th>
                                <td>H2 / 22 / Upper</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Meals.</th>
                                <td>Non Vegetarian</td>
                            </tr>
                        </table>
                        <table className='qr'>
                            <tr>
                                <td><img src="https://i.pinimg.com/originals/38/85/af/3885afcbb3ac6c08a4c6f9743b912143.jpg" alt=''></img></td>
                            </tr>
                        </table>
                        </div>
                    </div>

                </div>
        </div>

        <div className='ticket7'>
            <button onClick={click}>Next</button>
        </div>

        <div className='ticket8'>
            <h4>GENERAL CONDITIONS :</h4>
            <p>The Railway Administration reserves seats, berths, compartments, or carriage in accordance with the rules and conditions published in the Coaching Tariff. A passenger seeking reservation of berth or seats should purchase tickets from the Railway Reservation Offices/Authorised Travel Agency only.</p>
            <p>Advance reservations are made generally up to 120 days in advance for all classes and all trains. The period of advance reservation (ARP) is exclusive of the day of departure of the train.</p>
            <p>At intermediate stations where the train arrives on the following day, such reservations can be done more than 120 days in advance of date of journey from the intermediate station. ARP is in relation to the date of journey from train originating station. In case of some Inter-city day trains, the ARP is less.</p>
            <p>An individual can book only up to six passengers on one requisition form provided all passengers are for the same destination and for the same train.</p>
        </div>

    </div>
    </div>
  );
}

export default Ticket;