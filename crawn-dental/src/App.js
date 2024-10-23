import './App.css';
import React from 'react';
import Headers from './/components/header/header';
import Backgrounds from '../src/components/backgrounds/backgrounds';
import Hero from '../src/components/hero/hero';

function App() {
  return (
  <div>
      <Headers/>
      <Backgrounds/>
      <Hero />
  </div>
  )
}
    
export default App;