import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import PageHeader from "../components/PageHeader";
import { Form, useForm } from "../components/useForm";
import { createTheme, Paper, Grid, Stack } from "@mui/material";
import Controls from "../components/controls/Controls";
import Header from "../components/header";
import * as studentService from "../components/Services/studentService";
import DetailsIcon from "@mui/icons-material/Details";

const theme = createTheme();
const useStyles = makeStyles({
  pageContent: {
    margin: theme.spacing(15),
    padding: theme.spacing(8),
    backgroundColor: "#eed971ff",
    width: "60%",
  },
});
const hostelfeeItems = [
  { id: "monthly", title: "Monthly" },
  { id: "terms", title: "Terms" },
  { id: "yearly", title: "Yearly" },
];

const initialFValues = {
  id: 0,
  name: "",
  class: "",
  rollnumber: "",
  schoolfee: "",
  busfee: "",
  hostelfee: "",
  termI: "",
  termII: "",
  termIII: "",
  departmentId: "",
  tabsfees: "",
};

export default function Feesdetails(props) {
  const { addOrEdit, recordForEdit } = props;
  const [openProgress, setOpenProgress] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("phoneNumber" in fieldValues) {
      temp.phoneNumber = fieldValues.phoneNumber ? "" : "Required";
      if (fieldValues.phoneNumber != "")
        temp.phoneNumber = /^[0-9]{10}$/.test(fieldValues.phoneNumber)
          ? ""
          : "Phone Number should be 10 digit numeric value";
    }
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "Required";
      if (fieldValues.email != "")
        temp.email = /$^|.+@.+..+/.test(fieldValues.email)
          ? ""
          : "Email is not valid";
    }
    if ("subject" in fieldValues)
      temp.subject = fieldValues.subject ? "" : "Required.";
    if ("departmentId" in fieldValues)
      temp.departmentId = fieldValues.departmentId ? "" : "Required";

    if ("isAgreed" in fieldValues)
      temp.isAgreed = fieldValues.isAgreed == true ? "" : "Required";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert(JSON.stringify(values));
      resetForm();
    }
  };

  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="Fees Details"
        icon={<DetailsIcon fontSize="large" />}
      />

      <Paper className={classes.pageContent}>
        <Form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <Controls.Phone
                label="Student Name"
                name="studentname"
                value={values.name}
                onChange={handleInputChange}
                error={errors.name}
              />
              <Controls.Select
                label="Class"
                name="departmentId"
                value={values.departmentId}
                onChange={handleInputChange}
                options={studentService.getClassCollection()}
                error={errors.departmentId}
              />

              <Controls.Input
                label="Roll No:"
                name="rollno"
                value={values.subject}
                onChange={handleInputChange}
                error={errors.subject}
              />
              <Controls.RadioGroup
                label="Hostelfee"
                name="hostelfee"
                value={values.hostelfee}
                onChange={handleInputChange}
                items={hostelfeeItems}
                error={errors.hostelfee}
              />

              {/* <Controls.Checkboxlistfee
                values={values}
                onChange={handleInputChange}
              /> */}
              <Controls.Tabsfees />
            </Grid>
            <Grid container sx={{ justifyContent: "center" }}>
              <Controls.Button type="submit" text="Submit" />
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </>
  );
}
