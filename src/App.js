import {DestinationCard} from './components/DestinationCard';
import './App.css';

import EventDetails from './components/EventDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingForm from './components/BookingForm';
import './BookingForm.css';




function App() {
  return (
    <div className="App">
      <DestinationCard></DestinationCard>
      <EventDetails></EventDetails>
      <BookingForm></BookingForm>
     </div>
  );
}

export default App;
