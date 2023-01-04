/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 

function MyDatePicker(props){

  const[picdate ,setPicdate] = useState(new Date());

  return(
    <div className='daypick'> 
            <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
            format='dd/MM/yyyy'
            value={picdate}
            onChange={(e)=>{setPicdate(e.target.value)}}
            minDate={new Date(props.startdate)}  maxDate={new Date(props.enddate)}> 
            </DatePicker>
            </div>
        
      );
}
export default MyDatePicker;

  
// MyDatePicker.propTypes = {
//   'startdate' : PropTypes.date.isRequired,
//   'enddate' : PropTypes.date.isRequired,
//   'onChange':PropTypes.func
// };

// MyDatePicker.defaultProps = {
//   'selectdate' : string,
//   'startdate' : date,
//   'enddate':date
// };

