import React from 'react';
import './App.css';
import ExploreIcon from './assets/components/ExploreIcon/ExploreIcon'

function App() {
  return (
    <div className="App">
      <ExploreIcon text="3D Print" cName="printer"/>
      <ExploreIcon text="CAD Design" cName="cad"/>
      <ExploreIcon text="All Services" cName="otherservice"/>
      <ExploreIcon text="Printer Repair" cName="repair"/>
      <ExploreIcon text="Optimize STL" cName="curagr"/>
      <ExploreIcon text="Design Sketch" cName="sketch"/>
    </div>
  );
}

export default App;
