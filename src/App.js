import { Router } from '@reach/router';
import './App.css';
import Valorificare from './components/levels-components/valorificare/valorificare';
import Navbar from './components/navbar/navbar';
import { Whatsap } from './components/whatsap/whatsap';
import Contact from './pages/contact';
import Despre from './pages/despre';
import Home from './pages/home';
import Pachete from './pages/pachete';
import Protejare from './components/levels-components/protejare/protejare'
import { valorificare } from './data/db';
import { protejare } from './data/protejare';

const title  = "Detailing Auto Suceava - Acasa"
function App() {
  return (
    <div className="App">
      <Whatsap />
      <Navbar />
      <Router>
        <Home path="/" title={title}/>
        <Despre path="/despre"/>
        <Pachete path="/servicii" />
        <Contact path="/contact" />
        <Valorificare path="/valorificare"  valorificare={valorificare}/>
        <Protejare path="/protejare" protejare={protejare}/>
      </Router>
    </div>
  );
}

export default App;
