/* eslint-disable no-unused-vars */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 
import PropTypes from 'prop-types';


export const MyDatePicker = ({ minDate , maxDate , ...props })=> {

  const [ value , updateValue ] = useState (new Date ());
 


  return (
    <div className='daypick'>
          <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
          format='dd/MM/yyyy' onChange={(date)=>updateValue(date)}
          value={value}
          minDate={new Date (2022 , 10 , 1)} maxDate={new Date (2022 , 11 , 31)}>
          </DatePicker>
          </div>
        
      );
};


MyDatePicker.propTypes = {

  /**
   * What background color to use
   */
  'backgroundColor' : PropTypes.string ,
  /**
   * some title of the component
   */
  'label' : PropTypes.string.isRequired ,
  /**
   * The starting point should be the date
   */
  'minDate' : '01/01/2022' ,
  /**
   * The ending point should be the date
   */

  'maxDate' : '31/12/2023'
};

MyDatePicker.defaultProps = {
  'label' : 'datepicker' ,
  'backgroundColor' : null ,
  'minDate' : string ,
  'maxDate' : string
};
