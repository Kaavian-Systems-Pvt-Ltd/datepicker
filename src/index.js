/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import propTypes from 'prop-types';
import './daypick.css'; 

export default function MyDatePicker(startdate,enddate,selectdate){

  const[date ,setDate] =  useState(new Date());

  // console.log(startdate);

  return(
    <div className='daypick'>

            <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
            format='dd/MM/yyyy' 
          // onChange={setStartdate}
          
            onChange={(date) =>{(selectdate(date))}}
            // onChange={(date) =>{selectdate(setDate(date))}}
            value={date}
            minDate={new Date(startdate)}  maxDate={new Date(enddate)}> 
            </DatePicker>
            </div>
        
      );


MyDatePicker.propTypes = {
  'startdate' : PropTypes.date.isRequired,
  'enddate' : PropTypes.date.isRequired,
  'selectdate':PropTypes.func
};

MyDatePicker.defaultProps = {
  'selectdate' : string,
  'startdate' : date,
  'enddate':date
};

}