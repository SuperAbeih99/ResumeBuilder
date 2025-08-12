import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DashboardLayout = ({ activeMenu, children }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeMenu={activeMenu} />

      <main className="flex-1">
        {user && <div className="container mx-auto pt-4 pb-4">{children}</div>}
      </main>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
