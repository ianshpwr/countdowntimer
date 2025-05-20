import './App.css';
import Messages from './Messages';
import Countdown from './Countdown';
import { Routes, Route } from 'react-router-dom';


function App() {
return <div>
  <Routes>
    <Route path="/" element={<Countdown/>}/>
    <Route path="/messages" element={<Messages/>}/>
  </Routes>
  </div>
}
export default App;