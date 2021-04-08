import React from 'react';
import './App.css';
import ExploreContainer from './assets/containers/ExploreContainer/ExploreContainer'
import OptionBar from './assets/components/OptionBar/OptionBar'


function App() {
  return (
    <div className="App">
      <h1 className="explore">Find services near you</h1>
      <ExploreContainer/>
      <OptionBar/>
    </div>
  );
}

export default App;
