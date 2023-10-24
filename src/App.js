import {DestinationCard} from './components/DestinationCard';
import './App.css';

import EventDetails from './components/EventDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingForm from './components/BookingForm';
import {PaymentContainer} from './components/PaymentSpec';
import './paymentspec.css';
import DebitDetails from './components/Payment/DebitDetails';
import Header from './components/Header/Header';
import SearchPage from './components/Sidebar/HomePage';
import TravelCard from './components/recocard/TravelCard';
import { Footer } from './components/Footer/Footer copy/Footer';
import HotelRoom from './components/hotelcard/HotelCard';
import HotelRooms from './components/hotelroomcard/HotelRoomCard';
import HotelSpec from './components/HotelSpec/HotelSpec';
import Book from './components/Booking/Book';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <DestinationCard></DestinationCard>
     <TravelCard></TravelCard>
    <HotelRooms></HotelRooms>
    <TravelCard></TravelCard>
     <Footer></Footer>

     <Header></Header>
     <HotelSpec></HotelSpec>
     <Footer></Footer>

     <Header></Header>
     <Book/>
     <DebitDetails/>
     <Footer></Footer>
     


      {/* <EventDetails></EventDetails> */}
      {/* <BookingForm></BookingForm> */}
      {/* <PaymentContainer></PaymentContainer>  */}
      {/* <DebitDetails></DebitDetails> */}
{/* <SearchPage/>    <HotelRoom></HotelRoom>
 */}

</div>
  );
}

export default App;
