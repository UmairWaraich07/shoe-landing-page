import Navbar from "./components/Navbar";
import {
  CustomerReviews,
  Footer,
  Hero,
  Products,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b overflow-hidden">
        <Hero />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        {" "}
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />{" "}
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />{" "}
      </section>
    </main>
  );
};

export default App;
