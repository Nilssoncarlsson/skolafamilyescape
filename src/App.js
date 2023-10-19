import {DestinationCard} from './components/DestinationCard';
import './App.css';

import EventDetails from './components/EventDetails';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <DestinationCard></DestinationCard>
      <EventDetails></EventDetails>
   </div>
  );
}

export default App;
