import './App.css';
import Messages from './Messages';
import Countdown from './Countdown';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';  

function App() {
return <div>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Countdown/>}/>
    <Route path="/messages" element={<Messages/>}/>
  </Routes>
  </div>
}
export default App;