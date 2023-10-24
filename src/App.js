import { DestinationCard } from './components/DestinationCard';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PaymentContainer } from './components/PaymentSpec';
import './paymentspec.css';
import DebitDetails from './components/Payment/DebitDetails';
import Header from './components/Header/Header';
import TravelCard from './components/recocard/TravelCard';
import { Footer } from './components/Footer/Footer copy/Footer';
import HotelSpec from './components/HotelSpec/HotelSpec';
import Book from './components/Booking/Book';
import Sidebar from './components/Sidebar/Sidebar';
import HotelRoomCard from './components/hotelroomcard/HotelRoomCard';
import EventCard from './components/EventCard/EventCard';

function App() {

  return (
    <div className="App">
      <Header />
      <DestinationCard />
      <TravelCard />
      <EventCard />
      <TravelCard />
      <Footer />
      <Header />
      <HotelSpec />
      <Footer />
      <Header />
      <HotelRoomCard />
      <Book />
      <DebitDetails />
      <PaymentContainer />
      <Footer />

      <Sidebar />

      <Sidebar />

    </div>
  );
}

export default App;
