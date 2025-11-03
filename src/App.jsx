import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

const App = () => (
     <main className="relative text-left">
          <Nav />
          <section className="xl:paddin-1 wide:padding-r padding-b">
               <Hero />
          </section>
          <section className="xl:paddin-1 wide:padding-r padding-b">
               <PopularProducts />
          </section>
          <section className="xl:paddin-1 wide:padding-r padding-b">
               <SuperQuality />
          </section>
          <section className="xl:paddin-1 wide:padding-r padding-b">
               <Services />
          </section>
          <section className="padding">
               <SpecialOffer />
          </section>
          <section className="bg-pale-blue padding">
               <CustomerReviews />
          </section>
          <section className="padding-x sm:py-32 py-16 w-full">
               <Subscribe />
          </section>
          <section className="w-full bg-black padding-x padding-t pb-8">
               <Footer />
          </section>
     </main>
);

export default App;
