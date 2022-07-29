
import './App.scss';
import {Home} from './components/Home';
import {Event} from './components/Event';
import {Intern} from './components/Intern';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Home/>
      <Event/>
      <Intern/>
      <Footer/>
    </div>
  );
}

export default App;
