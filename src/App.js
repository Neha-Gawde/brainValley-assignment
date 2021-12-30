import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
