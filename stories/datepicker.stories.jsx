import React from 'react';
import { MyDatePicker } from './datepicker.jsx';

export default {
  title:'Datepicker',
  component : MyDatePicker, 
};

const Template = (args)=> <MyDatePicker {...args} />;


export const  minRange = Template.bind ({});
minRange.args = {
mindate : '05/12/2022',
maxdate : '31/12/2022',
};

export const  maxrange = Template.bind ({});
maxrange.args = {
mindate : '05/12/2020' ,
maxdate : '31/12/2023',
};

export const  past = Template.bind ({});
past.args = {
mindate : '01/01/2020'
};

export const  future = Template.bind ({});
future.args = {
maxdate : '31/12/2023',
};

export const  custom = Template.bind ({});
custom.args = {
mindate : '05/12/2022' ,
maxdate : '15/12/2022',
};

