
import './App.scss';
import {Face} from './components/Face';
import {Home} from './components/Home';
import {Event} from './components/Event';
import {Intern} from './components/Intern';
import {Label} from './components/Label'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Face/>
      <Home/>
      <Event/>
      <Label/>
      <Intern/>
      <Footer/>
    </div>
  );
}

export default App;
