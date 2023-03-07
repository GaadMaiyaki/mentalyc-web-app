import { Outlet } from "react-router";

import Footer from "../components/footer";
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

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DashboardLayout;
