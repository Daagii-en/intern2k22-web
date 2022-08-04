
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import {Face} from './components/Face';
import {Home} from './components/Home';
import {Event} from './components/Event';
import {Intern} from './components/Intern';
import {Label} from './components/Label'
import { Partners } from './components/Partners';
import { Social } from './components/Social';
import vd from './logo/Pexels-Videos.mp4';
function App() {
  return (
    
     
     <div className="App">
      <video autoPlay loop muted><source src={vd} /></video>
      <Header/>
      <Face/>
    
      <Home/>
      <Event/>
      <Label/>
      <Social/>
      <Partners/>
      <Intern/>
      <Footer/>
    </div>
    
   
  );
}

export default App;
