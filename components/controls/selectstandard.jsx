import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material";
import MenuItem from "@mui/material";

const standard = [
    {
      value: "classnine",
      label: "9",
    },
    {
      value: "classten",
      label: "10",
    },
    {
      value: "classeleven",
      label: "11",
    },
    {
      value: "classtwelve",
      label: "12",
    },
  ];
  export default function Selectstandard(){
    const [class, setclass] = React.useState('std');


  return (
    <>
        <TextField
          id="outlined-select-currency"
          select
          label="Class"
          value={std}
          onChange={handleChange}
          helperText="Please select your class"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </>
  );
}
  
  