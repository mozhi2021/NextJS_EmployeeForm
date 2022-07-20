import React, { Component } from "react";

export default function Totalfee() {
  //   constructor(props) {
  //     super(props);
  this.state = {
    data: [
      {
        SchoolFees: "Term I",
        Rupees: 20000,
      },
      {
        SchoolFees: "Term II",
        Rupees: 15000,
      },
      {
        SchoolFees: "Term III",
        Rupees: 15000,
      },
    ],
  };
  //   }
  return(
  
  const tableBody = this.state.data.map((item) => (
    <tr key={item.firstname}>
      <td>{item.SchoolFees}</td>
      <td>{item.Rupees}</td>
    </tr>
  ));
  const total = this.state.data.reduce(
    (total, currentItem) => (total = total + currentItem.salary),
    0
  );
  return (
    <table>
      <thead>
        <tr>
          <th>School Fees</th>
          <th>Rupees</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
      <tfoot>
        <tr>
          Total:
          {total}
        </tr>
      </tfoot>
    </table>
  );
}
