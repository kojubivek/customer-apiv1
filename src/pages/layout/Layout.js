import React from "react";
import { Footer } from "./Footer.js";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};
