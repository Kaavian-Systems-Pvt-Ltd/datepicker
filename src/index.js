/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import PropTypes from 'prop-types';
import './daypick.css'; 

function MyDatePicker(props){

  const[date ,setDate] =  useState(new Date());

  console.log(date);

  return(
    <div className='daypick'>
            <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
            format='dd/MM/yyyy' 
          
            // onChange={(date) =>{(selectdate(date))}}
            onChange={(date) =>{setDate(date)}}
            value={date}
            minDate={new Date(props.startdate)}  maxDate={new Date(props.enddate)}> 
            </DatePicker>
            </div>
        
      );
}
export default MyDatePicker;

  
MyDatePicker.propTypes = {
  'startdate' : PropTypes.date.isRequired,
  'enddate' : PropTypes.date.isRequired,
  'onChange':PropTypes.func
};

MyDatePicker.defaultProps = {
  'selectdate' : string,
  'startdate' : date,
  'enddate':date
};

