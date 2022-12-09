import React from 'react';
import { MyDatePicker } from './datepicker';

export default {
  'title':'mydates',
  'component' : MyDatePicker ,
  'argTypes' : {
    'backgroundColor' : { 'control' : 'color' }
  } 
};

const Template = (args)=> <MyDatePicker {...args} />;


export const  Range = Template.bind ({});
Range.args = {
'mindate' : '05/12/2022' ,
'maxdate' : '31/12/2022'
};