import React, { useState } from "react";
import Datepicker from 'react-datepicker'
import ReactDOM from "react-dom";
import Input from '@material-ui/core/Input';
import { Label,Button } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import'react-datepicker/dist/react-datepicker.css'

const filter = createFilterOptions();

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Location = [
 
  { title: "ג'למה"},
  { title: "שקד"},
  {title:"מבוא דותן"},
  {title:"105"},
  {title :"בארותיים"},
  {title :'שומרון-חטמ"ר'},
  {title :" הר ברכה"},
  {title : "הר כביר"},
  {title : "שבי שומרון"},
  {title :"בית חגי"},
  {title : " חרסינה"},
  {title : " עתניאל"},
  {title : "שדה בועז"},
  {title : 'עציון-חטמ"ר'},
  {title : "300"},
  {title : " הרודיון"},
  {title: "כרמי צור"},
  {title :"הר גילה"},
  {title : 'הל"ה'},
  {title :"אבו דיס"},
  {title:' הבקעה-חטמ"ר'},
  {title: "מול נבו"},
  {title:'חטמ"ר-בנימין'},
  {title:'עופר'},
{title:'רמה'},
{title:'מצודת אדומים'},
{title:'יפתח'},
{title :'נחל עוז'},
{title : 'כיסופים'},
{title:"אמיתי"},
{title: "רעים"},
{title: "מופ דרום"},
{title :"סופה"},
{title: "חולית"},
{title:"שבטה"},
{title:"רמון"},
{title : "צהלים"},
{title :"אל פוראן"},

];

 
export default function Home() {
 
   const [selectedDate, setSelectedDate] = useState(null)
   const [value] = React.useState(null);

    return (
      
     <div>

      <img  className="Logo-airplan" src="mountains.png" alt="a"></img>
      {/* <img className="Rectangle" src="Rectangle 29.png" alt="a"/> */}
      <div className="Rectangle">
      <div className = "sec-container">

      <Autocomplete
      value={value}
      
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={Location}
      getOptionLabel={(option) => {
      
        if (typeof option === 'string') {
          return option;
        }
      
        if (option.inputValue) {
          return option.inputValue;
        }
      
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: 230 }}
      freeSolo
      renderInput={(params) => (
       
        <TextField {...params} label="  חלפים" variant="outlined" />
              
      )}
    />
     
     <Autocomplete
      value={value}
     
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

      
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={Location}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
   
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: 230 }}     freeSolo
      renderInput={(params) => (
        <TextField {...params} label="  צוות" variant="outlined" />
      )}
    />
      <Autocomplete

     
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

      

        return filtered;
      }}
      
      options={Location}
      getOptionLabel={(option) => {
      
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      // renderOption={(option) => option.title}
      style={{ width: 230 }}
      freeSolo
      renderInput={(params) => (
        <div class = "input-wrapper">
        <img className = "small-icon" src = {"Location.png"} alt = "calendar" />
        <TextField {...params} label="  מיקום" variant="outlined" />
        </div>
      )}
    />
    <div className = "date-wrapper">
<img src = "calendar.png" alt = "icon" className = "sm small-icon" />
      <Datepicker
      className="input-date"
     placeholderText="                   זמן"
     selected={selectedDate} 
     onChange={date =>setSelectedDate(date)}
     dateFormat='dd/MM/yyyy'
     
     isClearable
     showYearDropdown
     scrollableMonthYearDropdown
    
     />
    </div>
      </div>
     
     </div>
     <Autocomplete
      value={value}
      // onKeyPress = {() => {blah(value)}}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={Location}
      getOptionLabel={(option) => {
      
        if (typeof option === 'string') {
          return option;
        }
      
        if (option.inputValue) {
          return option.inputValue;
        }
      
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: 230 }}
      freeSolo
      renderInput={(params) => (
       
        <TextField {...params} label=" חיפוש-טיסה" variant="outlined" />
              
      )}
    />
     
     </div>

      
    );
}


