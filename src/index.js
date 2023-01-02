/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import './daypick.css'; 

export default function MyDatePicker(props){

  const [ startdate , setStartdate ] = useState (new Date ());

  const onChangeDate = (date) => {
    const newDate = setStartdate((new Date(date.target.value)));
    setStartdate(newDate);
    console.log(newDate);
  };


  
  return(
    <div className='daypick'>

          <DatePicker  dayPlaceholder='dd' mon1thPlaceholder='mm' yearPlaceholder='yyyy' 
          format='dd/MM/yyyy' onChange={(e) =>onChangeDate(e)}  value={startdate}
          minDate={new Date(props.startdate)} maxDate={new Date(props.enddate)}> 
          </DatePicker>
          </div>
        
      );
};

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
