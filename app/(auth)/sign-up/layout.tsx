import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-tech bg-cover">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {children}
    </main>
  );
};

export default Layout;
