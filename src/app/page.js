import Care from "@/components/Care";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reference from "@/components/Reference";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <Reference />
      <Care />
      <Footer />
    </div>
  );
};

export default Home;
