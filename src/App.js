import React from 'react';
import Mandelbrot from './mandelbrot.jsx'
const stylez = {
  display:'flex',
  justifyContent:'center'
}

function App() {
  return (
    <div style={stylez} className="App">
      <h2>Give it approx 12 sec....</h2>
      <Mandelbrot/>
    </div>
  );
}

export default App;
