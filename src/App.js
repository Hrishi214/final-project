import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import error from './error';



function App() {
  return (
<>
    <Navbar/>

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/error"component= {error} />
            </Switch>



{/* <About/>
<Contact/>*/}


</>
  )
}


export default App;
