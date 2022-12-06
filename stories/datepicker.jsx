import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 

export default function MyDatePicker({minDate,maxDate,color,size}) {
  
    const [value, updateValue] = useState(new Date());
 
    const onChange = (date) => {
    updateValue(date);
  }
 
  return (
    <div className='daypick'>
        <h1>Datepicker Component</h1> <br/>
      <DatePicker dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
      format='dd/MM/yyyy'  onChange={onChange} value={value}
      minDate={new Date(2022,0,1)} maxDate={new Date(2023,11,31)}>
      </DatePicker>
    </div>
  );
}