import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import PopularProduct from "./Components/PopularProduct";
import SpecialOffer from "./Components/SpecialOffer";
import SuperQuality from "./Components/SuperQuality";
import Services from "./Components/Services";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import CustomersReview from "./Components/CustomersReview";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:pl-16 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue">
        <CustomersReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
