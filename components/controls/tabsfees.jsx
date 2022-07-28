import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import TextField from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Input } from "@mui/material";
import { Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tabsfees() {
  const [input, setInput] = React.useState({
    Admissionfee: "5000",
    Bookfee: "5500",
    Schoolfee: "9500",
    TermII: "15000",
    TermIII: "13000",
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
  const [total, setTotal] = React.useState("");
  useEffect(() => {
    setTotal(
      parseInt(input.Admissionfee) +
        parseInt(input.Bookfee) +
        parseInt(input.Schoolfee)
    );
  }, [input]);
  const TotaltermIfee = function () {
    const { Admissionfee, Bookfee, Schoolfee } = input;
    setResult(Number(Admissionfee) + Number(Bookfee) + Number(Schoolfee));
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "70%" }}>
      <FormControl
        component="fieldset"
        sx={{ border: "1px groove lightgrey", p: 1 }}
      >
        <FormLabel component="legend">School Fees</FormLabel>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            aria-label="basic tabs example"
          >
            <Tab label="Term I" {...a11yProps(0)} />
            <Tab label="Term II" {...a11yProps(1)} />
            <Tab label="Term III" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <Grid container spacing={0}>
              <Grid item xs={6} md={6}>
                <label>Admission Fee </label>
              </Grid>
              <Grid item xs={6} md={6}>
                <Input
                  onChange={handleInput}
                  name="Admissionfee"
                  id="admissionfee"
                  label="Admissionfee"
                  value={input.Admissionfee}
                  type="text"
                  startAdornment=" &#8377;"
                ></Input>
              </Grid>
              <Grid item xs={6} md={6}>
                <label>Book Fee </label>
              </Grid>

              <Grid item xs={6} md={6}>
                <Input
                  onChange={handleInput}
                  name="Bookfee"
                  label="bookfee"
                  value={input.Bookfee}
                  type="text"
                  startAdornment=" &#8377;"
                ></Input>
              </Grid>
              <Grid item xs={6} md={6}>
                <label>School Fee </label>
              </Grid>
              <Grid item xs={6} md={6}>
                <Input
                  onChange={handleInput}
                  name="Schoolfee"
                  id="schoolfee"
                  label="Schoolfee"
                  value={input.Schoolfee}
                  type="text"
                  startAdornment=" &#8377;"
                ></Input>
              </Grid>
              <Grid item xs={6} md={6}>
                <button>Total of Term I</button>
              </Grid>
              <Grid item xs={6} md={6}>
                {total !== undefined && <span>{total}</span>}
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
        <Box>
          <TabPanel value={value} index={1}>
            <Grid container spacing={0}>
              <Grid item xs={6} md={6}>
                <label>Term II</label>
              </Grid>
              <Grid item xs={6} md={6}>
                <Input
                  onChange={handleInput}
                  name="TermII"
                  label="TermII"
                  value={input.TermII}
                  type="text"
                  // startAdornment={
                  //   <InputAdornment position="start">$</InputAdornment>
                  // }
                  startAdornment=" &#8377;"
                ></Input>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>

        <Box>
          <TabPanel value={value} index={2}>
            <Grid container spacing={0}>
              <Grid item xs={6} md={6}>
                <label>Term III </label>
              </Grid>
              <Grid item xs={6} md={6}>
                <Input
                  onChange={handleInput}
                  name="TermIII"
                  label="TermIII"
                  value={input.TermIII}
                  type="text"
                  startAdornment=" &#8377;"
                ></Input>
              </Grid>
            </Grid>

            {/* <br />
            <button>Total </button>
            {sum !== undefined && <span>{sum}</span>} */}
          </TabPanel>
        </Box>
      </FormControl>
    </Box>
  );
}
