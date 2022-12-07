import React from 'react';
import { MyDatePicker } from './datepicker';

export default {
  'title' : 'Example/calendar' ,
  'component' : MyDatePicker ,
  'argTypes' : {
    'backgroundColor' : { 'control' : 'color' }
  } 
};

const Template = (args)=> <MyDatePicker {...args} />;

export const Normal = Template.bind ({});
Normal.args = {
   'label' : 'Datepicker' ,
   'backgroundColor' : null ,
  'mindate' : '01/01/2022' ,
  'maxdate' : '31/12/2023'
};
export const  Rangechange = Template.bind ({});
Rangechange.args = {
'mindate' : '01/11/2022' ,
'maxdate' : '31/12/2022'
};


