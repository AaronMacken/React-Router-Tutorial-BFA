import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Products from './pages/Products.js';
import Product from './pages/Product';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AboutPage() {
  return <About myProp="hola!" />
}

function App() {
  return (
    <div className="App">

    <Router>
      <Navbar />
        <div className="pageWrapper">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/products" component={Products} exact />
            <Route path="/products/:productId" component={Product} />
          </Switch>
        </div>
      <Footer />
    </Router>

    </div>
  );
}

export default App;
