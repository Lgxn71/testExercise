import { ReactNode } from "react";

import Header from "./Header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      {/* place for footer */}
    </main>
  );
};

export default Layout;
