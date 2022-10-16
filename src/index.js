import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// class Square extends React.Component {
//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={() => {
//           this.props.onnClick()
//         }}>
//         {/* TODO */}{this.props.nilai}
//       </button>
//     );
//   }
// }
function Square(props) {
  return (  
    <button 
      className="square" 
      onClick={props.onnClick}
    >
      {/* TODO */}{props.nilai}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  async handleClick(val) {
    const squares = this.state.squares.slice();
    if (squares[val] || findTheWinner(this.state.squares)) {
      return;
    }
    squares[val] = this.state.xIsNext ? 'X' : 'O';
    console.log('new input : ' + squares);
    await this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
    console.log('our board now : ' + this.state.squares);
  }

  fungs(i) {
    return (
      <Square 
        nilai={this.state.squares[i]}
        onnClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    const win = findTheWinner(this.state.squares);
    let status;
    if (win) {
      status = 'The Winner is : ' + win;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.fungs(0)}
          {this.fungs(1)}
          {this.fungs(2)}
        </div>
        <div className="board-row">
          {this.fungs(3)}
          {this.fungs(4)}
          {this.fungs(5)}
        </div>
        <div className="board-row">
          {this.fungs(6)}
          {this.fungs(7)}
          {this.fungs(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function findTheWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[b] === squares[a] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


