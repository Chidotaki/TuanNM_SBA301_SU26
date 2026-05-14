import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import OrchidsList from './components/OrchidsList';
import OrchidsCarousel from './components/OrchidsCarousel';

function App() {
  return (
    <>
      <Navbar />
       <OrchidsCarousel />
      <OrchidsList />
      
    </>
  );
}
export default App;