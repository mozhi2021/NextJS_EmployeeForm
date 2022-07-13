import React, { useState, useEffect } from "react";
import { Form, useForm } from "../../components/useForm";
import Controls from "../../components/controls/Controls";
import { Grid } from "@mui/material";
import * as employeeService from "../../components/Services/employeeService";
import Stack from "@mui/material/Stack";
import Progress from "../../components/Progress";

const religionItems = [
  { id: "hindu", title: "Hindu" },
  { id: "muslim", title: "Muslim" },
  { id: "christian", title: "Christian" },
  { id: "sikh", title: "Sikh" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  phoneNumber: "",
  religion: "",
  city: "",
  departmentId: "",
  dateofjoining: new Date(),
  isPermanent: false,
  english: false,
  french: false,
  spanish: false,
  german: false,
};

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [openProgress, setOpenProgress] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "Required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("city" in fieldValues) temp.city = fieldValues.city ? "" : "Required";
    if ("phoneNumber" in fieldValues) {
      temp.phoneNumber = fieldValues.phoneNumber ? "" : "Required";
      if (fieldValues.phoneNumber != "")
        temp.phoneNumber = /^[0-9]{10}$/.test(fieldValues.phoneNumber)
          ? ""
          : "Phone Number should be 10 digit numeric value";
    }
    if ("departmentId" in fieldValues)
      temp.departmentId = fieldValues.departmentId ? "" : "Required";
    if ("gender" in fieldValues)
      temp.gender = fieldValues.religion ? "" : "Required";
    if ("dateofjoining" in fieldValues)
      temp.dateofjoining = fieldValues.dateofjoining ? "" : "Required";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenProgress(true);
    if (validate()) {
      setTimeout(function () {
        addOrEdit(values, resetForm);
        setOpenProgress(false);
      }, 9500);
    }
  };
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.RadioGroup
            label="Religion"
            name="religionItems"
            value={values.religion}
            onChange={handleInputChange}
            items={religionItems}
            error={errors.religion}
          />
          <Controls.Select
            label="Department"
            name="departmentId"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
          />
          <Controls.Phone
            label="Phone Number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleInputChange}
            error={errors.phoneNumber}
          />
          <Controls.Checkboxlist values={values} onChange={handleInputChange} />
          <Controls.DatePicker
            label="Date of Joining"
            name="dateofjoining"
            value={values.dateofjoining}
            onChange={handleInputChange}
            error={errors.dateofjoining}
          />
          <Stack direction="row" spacing={2} sx={{ p: 2 }}>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" onClick={resetForm} />
          </Stack>
        </Grid>
      </Grid>
      <Progress openProgress={openProgress} setOpenProgress={setOpenProgress} />
    </Form>
  );
}
