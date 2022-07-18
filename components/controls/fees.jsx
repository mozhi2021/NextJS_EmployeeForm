import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React from "react";
// import Button from "./button";
import Button from "@mui/material";

export default function Fees(props) {
  const { values, onClick, onChange, error = null } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl
      error={error}
      component="fieldset"
      sx={{ m: 2, border: "1px groove lightgrey", p: 1 }}
      variant="outlined"
    >
      <FormLabel component="legend">School Fees</FormLabel>
      <FormGroup row>
        <FormControlLabel
          control={<Button name="termI" onClick={onClick} />}
          label="Term I"
        />
        <FormControlLabel
          control={<Button name="termII" onClick={onClick} />}
          label="Term II"
        />
        <FormControlLabel
          control={<Button name="termIII" onClick={onClick} />}
          label="Term III"
        />
      </FormGroup>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
