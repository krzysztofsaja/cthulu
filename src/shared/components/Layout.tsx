import { ReactNode } from "react";
import TopBar from "./TopBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between flex-col h-screen">
      <TopBar></TopBar>
      {children}
    </div>
  );
};

export default Layout;
