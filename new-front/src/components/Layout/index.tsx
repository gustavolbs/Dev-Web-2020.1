import { ReactNode } from "react";
import Sidebar from "../Sidebar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
