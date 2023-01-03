/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 

function MyDatePicker(startdate,enddate,selectdate){

  const[date ,setDate] =  useState(new Date());

  // console.log(startdate);

  return(
    <div className='daypick'>

            <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
            format='dd/MM/yyyy' 
          // onChange={setStartdate}
          
            onChange={(date) =>{selectdate(setDate(date))}}
            value={startdate}
            minDate={new Date(startdate)}  maxDate={new Date(enddate)}> 
            </DatePicker>
            </div>
        
      );
};

export default MyDatePicker;

MyDatePicker.propTypes = {
  'startdate' : PropTypes.date.isRequired,
  'enddate' : PropTypes.date.isRequired,
  'onChange':PropTypes.func.isRequired
};

MyDatePicker.defaultProps = {
  'selectdate' : string,
  'startdate' : date,
  'enddate':date
};
