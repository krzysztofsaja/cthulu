import { ReactNode } from "react";
import TopBar from "./TopBar";
import Navbar from "./NavBar/NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-mainBg flex min-h-screen flex-col items-center justify-between h-screen ">
      <TopBar></TopBar>
      <main className="p-4 flex-grow">{children}</main>
      <Navbar></Navbar>
    </div>
  );
};

export default Layout;
