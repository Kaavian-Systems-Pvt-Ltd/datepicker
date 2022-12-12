import { storiesOf } from '@storybook/react';
import React from 'react';
import { MyDatePicker } from './src/datepick';
import PropTypes from 'prop-types';

const stories = storiesOf('Datepicker' ,MyDatePicker);

stories.add('minrange' , ()=> {

  return <div> 
  <MyDatePicker startdate="2022,12,05" enddate="2022,12,31" />;
  </div>
})
stories.add('maxrange' , ()=> {

  return <div> 
  <MyDatePicker startdate="2020,12,05" enddate="2024,03,20" />;
  </div>
})
stories.add('past' , ()=> {

  return <div> 
  <MyDatePicker startdate="2021,01,01"  />;
  </div>
})
stories.add('future' , ()=> {

  return <div> 
  <MyDatePicker  enddate="2023,03,20" />;
  </div>
})
stories.add('customrange' , ()=> {

  return <div> 
  <MyDatePicker startdate="2022,12,12" enddate="2022,12,14" />;
  </div>
})
stories.add('default' , ()=> {

  return <div> 
  <MyDatePicker startdate="" enddate="" />;
  </div>
})
MyDatePicker.propTypes={
  startdate:PropTypes.string.isRequired,
  enddate:PropTypes.string.isRequired, 
  label:PropTypes.string.isRequired  
}