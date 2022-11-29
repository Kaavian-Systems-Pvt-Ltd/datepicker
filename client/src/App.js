import React, { useState } from "react";  
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import './App.css';  
  
// CSS Modules, react-datepicker-cssmodules.css  
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';  
function App(){

  const [startDate, setStartDate] = useState(new Date());  
  
  return (
    <div className="datepick">  
    <DatePicker id='dpick' dateFormat="dd/MM/yyyy" selected={startDate} 
    placeholder="Choose the date" 
    onChange={(date)=>setStartDate(date)}
    minDate={new Date(2022,5,1)}
    maxDate={new Date(2023,3,30)}>
    </DatePicker>  
  </div>
  );  

};  

export default App;
