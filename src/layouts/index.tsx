import React from "react";

import { Outlet } from "react-router";

import Header from "../components/header";

const DashboardLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
