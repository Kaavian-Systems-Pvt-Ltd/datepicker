/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import DatePicker from 'react-date-picker';
import PropTypes, { string } from 'prop-types';
import './daypick.css'; 

function MyDatePicker({props}){

  const [cdate,setCdate] = useState(new Date());

  return(
    <div className='daypick'> 
            <DatePicker  dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy' 
            format='dd/MM/yyyy'
            value={cdate}
            onChange={(d)=>{setCdate(d)}}
            minDate={new Date(props.startdate)}  maxDate={new Date(props.enddate)}> 
            </DatePicker>
            </div>
        
      );
}
export default MyDatePicker;

  
MyDatePicker.propTypes = {
  'startdate' : PropTypes.string.isRequired,
  'enddate' : PropTypes.string.isRequired,
  'onChange':PropTypes.func
};

MyDatePicker.defaultProps = {
  'selectdate' : string,
  'startdate' : string,
  'enddate':string
};

