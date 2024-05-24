import React from 'react';
import './App.css';
import Navbar from './Global components/Navbar';
import SliderComponent from './Small components/AllProducts';
import HomeBanner from './Small components/HomeBanner';
import Board from './Small components/Board';
import Card from './Small components/Card';

const App = () => {

  return (
    <div className="App">
      <main>
        <Navbar />
        <br></br>
        <HomeBanner />
        <br></br>
        <SliderComponent />
        <br></br>

          <div className="flexbox">

            <Board id="board-1" className="board">
              <Card id="card-1" className="card" draggable="true">
                <p>Card One</p>
              </Card>
            </ Board> 

            <Board id="board-2" className="board">
              <Card id="card-2" className="card" draggable="true">
                <p>Card Two</p>
              </Card>
            </ Board> 

          </div>
      </main>
    </div>
  );
};

export default App;