import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";

export default function Totalfee() {
  const [input, setInput] = React.useState({
    TermI: "20000",
    TermII: "15000",
    TermIII: "15000",
    TotalFee: "",
  });

  const [sum, setSum] = React.useState("");
  useEffect(() => {
    setSum(
      parseInt(input.TermI) + parseInt(input.TermII) + parseInt(input.TermIII)
    );
  }, [input]);

  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const Totalfee = function () {
    const { TermI, TermII, TermIII } = input;
    setResult(Number(TermI) + Number(TermII) + Number(TermIII));
  };

  return (
    <Box sx={{ width: "70%" }}>
      <FormControl
        component="fieldset"
        sx={{ border: "1px groove lightgrey", p: 1 }}
      >
        <FormLabel component="legend">Enter the Fees</FormLabel>

        <div>
          <label>Term I</label>
          <input
            onChange={handleInput}
            name="TermI"
            id="termI"
            label="TermI"
            value={input.TermI}
            type="text"
          ></input>
          <br />
          <label>Term II</label>
          <input
            onChange={handleInput}
            name="TermII"
            label="TermII"
            value={input.TermII}
            type="text"
          ></input>
          <br />
          <label>Term III </label>
          <input
            onChange={handleInput}
            name="TermIII"
            label="TermIII"
            value={input.TermIII}
            type="text"
          ></input>
          <br />

          <button>Total </button>
          {sum !== undefined && <span>{sum}</span>}
        </div>
      </FormControl>
    </Box>
  );
}
