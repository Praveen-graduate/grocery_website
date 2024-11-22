import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navi from './Navi';
import Home from './Home';
import CategorySection from './CategorySection.jsx';


function App() {
  return (
    <div>
      <Navi />
      <Home />
      <CategorySection />
    </div>
  );
}

export default App;
