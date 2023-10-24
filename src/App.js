import {DestinationCard} from './components/DestinationCard';
import './App.css';

import EventDetails from './components/EventDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingForm from './components/BookingForm';
import {PaymentContainer} from './components/PaymentSpec';
import './paymentspec.css';
import DebitDetails from './components/Payment/DebitDetails';
import Header from './components/Header/Header';
import TravelCard from './components/recocard/TravelCard';
import { Footer } from './components/Footer/Footer copy/Footer';
import HotelRooms from './components/hotelroomcard/HotelRoomCard';
import HotelSpec from './components/HotelSpec/HotelSpec';
import Book from './components/Booking/Book';



function App() {

  return (
    <div className="App">
      <Header/>
     <DestinationCard/>
     <TravelCard>
     </TravelCard>
    <HotelRooms/>
     <Footer/>
     <Header/>
     <HotelSpec/>
     <Footer/>
     <Header/>
     <Book/>
     <DebitDetails/>
     <PaymentContainer/>
     <Footer/>
     


</div>
  );
}

export default App;
