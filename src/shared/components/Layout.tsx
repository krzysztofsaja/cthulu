import { ReactNode } from "react";
import TopBar from "./TopBar";
import Navbar from "./NavBar/NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between flex-col h-screen">
      <TopBar></TopBar>
      {children}
      <Navbar></Navbar>
    </div>
  );
};

export default Layout;
