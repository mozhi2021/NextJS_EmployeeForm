import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import EmployeeForm from "./Employees/EmployeeForm";
import Employees from "./Employees/employees";

export default function Home() {
  return (
    <>
      <Employees />
    </>
  );
}

