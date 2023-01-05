/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css';
//import PropTypes from 'prop-types'; 

function MyDatePicker(props){

    const [val,setVal] = useState(new Date());

  return(
    <div className='daypick'> 
            <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
            format='dd/MM/yyyy'
            onChange={(e)=>{setVal(e.target.value)}}
            value={val}

            minDate={new Date(props.startdate)}  maxDate={new Date(props.enddate)}> 
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

