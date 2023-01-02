/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 

function MyDatePicker(props){

  const [ startdate , setStartdate ] =  useState(new Date().toLocaleDateString('fr-FR'));

  return(
    <div className='daypick'>

          <DatePicker  dayPlaceholder='dd' mon1thPlaceholder='mm' yearPlaceholder='yyyy' 
          format='dd/MM/yyyy'  onChange={(date) => {
          const d = new Date(date).toLocaleDateString('fr-FR');
          console.log(d);
          setStartdate(d);
          }} value={startdate}
          minDate={new Date(props.startdate)} maxDate={new Date(props.enddate)}> 
          </DatePicker>
          </div>
        
      );
};

export default MyDatePicker;
export let date;

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
