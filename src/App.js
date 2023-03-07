import React, { useState, useEffect } from "react";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Layanan from './components/Layanan';
import Home from './components/Home'
import Bisnis from './components/Bisnis';
import Pilih from './components/Pilih';
import About from './components/About';
import Footer from "./components/Footer";
import Jasa from './components/Jasa';
import Slider from './components/Slider';
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter, } from "react-router-dom";
import Team from './components/Team'
import Loading from "./components/Loading";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  })
  return (
    <>
      {isLoading ? (
      <Loading />
      ) : (
      <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/team' component={Team} />
            </Switch>
            <Footer />
          </BrowserRouter>

        </div>
      )}
    </>
  );
}

export default App;
