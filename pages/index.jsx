import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Employees from "./Employees/employees";

export default function Home() {
  return (
    <>
      <Employees />
    </>
  );
}

