/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 

function MyDatePicker(props){

  const[startdate ,setStartdate] =  useState(new Date().toLocaleDateString());

  console.log(startdate);

  return(
    <div className='daypick'>

          <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
           format='dd/MM/yyyy' 
          // onChange={setStartdate}
            onChange={(date) => {
            console.log(date);
          }}
          value={startdate}
          minDate={new Date(props.startdate)} maxDate={new Date(props.enddate)}> 
          </DatePicker>
          <div>{startdate}</div>
          </div>
        
      );
};

export default MyDatePicker;

// MyDatePicker.propTypes = {
//   'minDate' : PropTypes.date.isRequired,
//   'maxDate' : PropTypes.date.isRequired
// };

// MyDatePicker.defaultProps = {
//   'label' : string ,
//   'backgroundColor' : null ,
//   'minDate' : date ,
//   'maxDate' : date
// };
