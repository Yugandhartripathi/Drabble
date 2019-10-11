import React from 'react';
import ReactDOM from 'react-dom';
import CanvasDraw from 'react-canvas-draw';

class Draw extends React.Component{

    render() { 
        return(
        <div class="Container">
            <h1>Drabble</h1>
            <div style={{border: "10px solid black", width: "400px"}}>
                <CanvasDraw brushRadius={"5"} lazyRadius={"2"} brushColor={"#000"}/>
            </div>
        </div>
        );
    }
}
ReactDOM.render(<Draw />, document.getElementById("root"));