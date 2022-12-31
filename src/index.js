/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 
import PropTypes from 'prop-types';


export default function MyDatePicker(props){

  const [ value , setValue] = useState (new Date ());
 
  
  return(
    <div className='daypick'>
          <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
          format='dd/MM/yyyy'  selected={value} onChange={(date) => setValue(date)} value={value} 
          minDate={new Date(props.startdate)} maxDate={new Date(props.enddate)}>
          </DatePicker>
          </div>
        
      );
};

// MyDatePicker.propTypes = {
//   'backgroundColor' : PropTypes.string ,
//   'label' : PropTypes.string.isRequired ,
//   'minDate' : PropTypes.date.isRequired ,
//   'maxDate' : PropTypes.date.isRequired
// };

// MyDatePicker.defaultProps = {
//   'label' : string ,
//   'backgroundColor' : null ,
//   'minDate' : date ,
//   'maxDate' : date
// };
