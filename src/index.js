/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css';
//import PropTypes from 'prop-types'; 

function MyDatePicker({startdate,enddate}){

     const[val,setVal]=useState(new Date());

     const handleChange=(date)=>{
      setVal(date);
     }

  return(
    <div className='daypick'> 
            <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
            format='dd/MM/yyyy'
            value={val}
            onChange={handleChange}
            minDate={new Date(startdate)}  maxDate={new Date(enddate)}> 
            </DatePicker>
            </div>
        
      );
}
export default MyDatePicker;

  
// MyDatePicker.propTypes = {
//   'startdate' : PropTypes.string.isRequired,
//   'enddate' : PropTypes.string.isRequired,
//   'onChange':PropTypes.func
// };

// MyDatePicker.defaultprops = {
//   'setDate' : string,
//   'startdate' : string,
//   'enddate':string
// };

