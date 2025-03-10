import React from "react";
import Nav from "./Components/Nav";
import {
  Hero,
  PopularProduct,
  SuperQuality,
  Services,
  SpecialOffer,
  Subscribe,
  CustomersReview,
  Footer,
} from "./Sections";

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
