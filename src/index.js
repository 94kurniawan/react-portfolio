import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/scss/index.scss';
import Main from './pages/Main.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

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
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);


