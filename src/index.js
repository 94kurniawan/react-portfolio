import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/scss/index.scss';
import Dashboard from './pages/Dashboard.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
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


