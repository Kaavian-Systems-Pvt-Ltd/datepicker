# Datepicker

## Note:
This package datepicker is used to disable  dates of the user's input to the component and get the picked date value.

## Installation:
#### To install:
```npm i  https://github.com/Kaavian-Systems-Pvt-Ltd/datepicker.git --save-dev```

## Instructions:
- The starting or ending date format is must startdate="year/month/date" or enddate:"yyyy/mm/dd",
* The parameters are not change,must in same text ex:startdate, enddate,setdate,
+ The date values are may be possible to change as per user's choice to disable dates,
- The setNewdate and newdate are used to user get a date value in variable.

## The codes in your file: 
```
import MyDatePicker from '@kaavian-sys/datepicker';
import { useState } from 'react';
function App(){
      const[newdate,setNewdate]=useState(new Date());
      console.log(newdate);
  
     return (
            <div>
              <MyDatePicker valdate={newdate} onChange={setNewdate}  startdate="2022/12/01" enddate="2023/05/31"/>
            </div>
    );
}
export default App;  


```




