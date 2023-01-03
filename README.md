# Datepicker

## Note:
This package datepicker is used to disable your input dates to the component.

## Installation:
#### To install:
```npm i  https://github.com/Kaavian-Systems-Pvt-Ltd/Datepicker.git  --save-dev```

## Rules:
- The starting or ending date format is must startdate="year/month/date" or enddate:"yyyy/mm/dd",
* The parameters are not change,must in same text ex:startdate, enddate,setdate,
+ The date values are may be possible to change as per user's choice to disable dates,
- The setdate is used to user get a date value.

## The codes in your file: 
```
import MyDatePicker from '@kaavian-sys/datepicker';
import { useState } from 'react';
function App(){
    
  const[pickdate,setPickdate]=useState('');
  console.log(pickdate);
    return (
            <div>
              <MyDatePicker  startdate="2022/12/01" setdate={setPickdate}   enddate="2023/03/20"/>
            </div>
    );
}
export default App;  

```




