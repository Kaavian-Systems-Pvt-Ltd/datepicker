/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
// import './daypick.css'; 
import PropTypes from 'prop-types';


export default function MyDatePicker(props){

  const [ value , updateValue ] = useState (new Date ());
 
  const onChange = (date)=> {
  updateValue (date);
  };
  return(
    <div className='daypick'>
          <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
          format='dd/MM/yyyy'  onChange={onChange} value={value} 
          minDate={new Date(props.startdate)} maxDate={new Date(props.enddate)}>
          </DatePicker>
          </div>
        
      );
};

MyDatePicker.propTypes = {
  'backgroundColor' : PropTypes.string ,
  'label' : PropTypes.string.isRequired ,
  'minDate' : PropTypes.date.isRequired ,
  'maxDate' : PropTypes.date.isRequired
};

MyDatePicker.defaultProps = {
  'label' : string ,
  'backgroundColor' : null ,
  'minDate' : date ,
  'maxDate' : date
};
