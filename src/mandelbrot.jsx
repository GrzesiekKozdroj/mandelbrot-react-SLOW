import React, { Component } from 'react';
class MakeMandelbrotSet extends Component {
    constructor(){
        super()
        this.canvasRef = React.createRef()
        this.stajl = {
            display:"block",
            position:"absolute",
            top:0,
            left:0,
            margin: "auto auto",
            padding:0
        }
    }

    render() {
        return <canvas className="mandelbrot" style={this.stajl} ref={this.canvasRef}/>
    }
    componentDidMount() {
    const canvas = this.canvasRef.current
    canvas.width = window.innerWidth -3
    canvas.height = window.innerHeight -3
    const ctx = canvas.getContext('2d')  //// 3 - access node using .current
      // Start drawing
    setTimeout(()=>{
      function checkIfBelongsToMandelbrotSet(x,y) {
        let realComponentOfResult = x;
        let imaginaryComponentOfResult = y;
        // Set max number of iterations
        const maxIterations = 320;
        for (let i = 0; i < maxIterations; i++) {
          const tempRealComponent = realComponentOfResult * realComponentOfResult - imaginaryComponentOfResult *  imaginaryComponentOfResult + x;
          const tempImaginaryComponent = 2.0 * realComponentOfResult * imaginaryComponentOfResult + y;
          realComponentOfResult = tempRealComponent;
          imaginaryComponentOfResult = tempImaginaryComponent;
          // Return a number as a percentage
          if (realComponentOfResult * imaginaryComponentOfResult > 5) {
           return (i / maxIterations * 100);
          }
        }
        // Return zero if in set
        return 0;
      }

      // Set appearance settings
      const magnificationFactor = 35000;
      const panX = .734;
      const panY = .365;
      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const belongsToSet = checkIfBelongsToMandelbrotSet(x / magnificationFactor - panX, y / magnificationFactor - panY);
          if (belongsToSet === 0) {
            ctx.fillStyle = '#141414';
            // Draw a black pixel
            ctx.fillRect(x,y, 1,1);
          } else {
            ctx.fillStyle = 'hsl(124,100%, '+ (belongsToSet + 4) + '%)';
            // Draw a colorful pixel
            ctx.fillRect(x,y, 1,1);
          }
        }
      }
    },3000)
}
}
export default MakeMandelbrotSet