import React from "react";
import { Footer } from "./footer/Footer.js";
import { Header } from "./header/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};
