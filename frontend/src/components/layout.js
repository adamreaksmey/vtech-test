import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="m-2">
      <div className="pb-4">
        <u>BASIC TO DO APP</u>
      </div>
      {children}
    </div>
  );
};

export default Layout;
