import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
export default function HomePage({ Children }) {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
}
