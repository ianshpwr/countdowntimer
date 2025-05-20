import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './App.css';
function Countdown() {
  const targetDate = new Date("2025-07-19")

  function timeLeft(){
    const today = new Date();
    const diff = targetDate - today;
    if (diff <= 0){
      return {days: 0, hours: 0, minutes: 0, seconds: 0}
    }
   return {
      days: Math.floor(diff/(1000*60*60*24)),
      hours: Math.floor((diff/(1000*60*60))%24),
      minutes: Math.floor((diff/(1000*60))%60),
      seconds: Math.floor((diff/1000)%60),
    };
  }
  const [timeleft,setTimeleft] = useState(timeLeft());

  useEffect(()=>{
    const interval = setInterval(()=>{setTimeleft(timeLeft())}, 1000);
    return () => clearInterval(interval);
  },[])

return (
    <div className="App">
      <h1>Countdown to 2nd Year</h1>
      <div className="countdown">
        <div>{timeleft.days} Days</div>
        <div>{timeleft.hours} Hours</div>
        <div>{timeleft.minutes} Minutes</div>
        <div>{timeleft.seconds} Seconds</div>
      </div>

    <Link to="/messages" className='mess'>Write your Message</Link>
    <p>To Us, From Us — Messages for the Journey Ahead</p>
    </div>
  );
}
export default Countdown;