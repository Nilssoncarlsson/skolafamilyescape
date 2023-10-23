import {DestinationCard} from './components/DestinationCard';
import './App.css';

import EventDetails from './components/EventDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingForm from './components/BookingForm';
import {PaymentContainer} from './components/PaymentSpec';
import './paymentspec.css';


function App() {
  return (
    <div className="App">
      <BookingForm></BookingForm>
      
      <PaymentContainer></PaymentContainer>
     </div>
  );
}

export default App;
