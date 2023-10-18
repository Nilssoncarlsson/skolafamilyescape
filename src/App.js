import PopularDestinations, {DestinationCard} from './components/DestinationCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventDetails from './components/EventDetails';



function App() {
  return (
    <div className="App">
      <DestinationCard></DestinationCard>
      <EventDetails></EventDetails>
   </div>
  );
}

export default App;
