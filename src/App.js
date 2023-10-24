import {DestinationCard} from './components/DestinationCard';
import './App.css';

import EventDetails from './components/EventDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingForm from './components/BookingForm';
import {PaymentContainer} from './components/PaymentSpec';
import './paymentspec.css';
import DebitDetails from './components/Payment/DebitDetails';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header><br></br>
     <DestinationCard></DestinationCard>
      <EventDetails></EventDetails>
      <BookingForm></BookingForm>
      <PaymentContainer></PaymentContainer> 
      <DebitDetails></DebitDetails>

     </div>
  );
}

export default App;
