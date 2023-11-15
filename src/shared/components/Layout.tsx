import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between flex-col h-screen">{children}</div>
  );
};

export default Layout;