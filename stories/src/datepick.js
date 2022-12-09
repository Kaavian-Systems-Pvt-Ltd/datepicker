/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 
import PropTypes from 'prop-types';


export const MyDatePicker = ({ minDate , maxDate , ...props })=> {

  const [ value , updateValue ] = useState (new Date ());
 
  const onChange = (date)=> {
  updateValue (date);
  };
  return (
    <div className='daypick'>
          <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
          format='dd/MM/yyyy'  onChange={onChange} value={value} 
          minDate={new Date (2022,11,5)} maxDate={new Date (2022,11,31)}>
          </DatePicker>
          </div>
        
      );
};

// export const RandatePicker = ({ minDate , maxDate , ...props })=> {

//   const [ value , updateValue ] = useState (new Date ());
 
//   const onChange = (date)=> {
//   updateValue (date);
//   };
//   return (
//     <div className='daypick'>
//           <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
//           format='dd/MM/yyyy'  onChange={onChange} value={value} />
//           </div>
        
//       );
// };



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
