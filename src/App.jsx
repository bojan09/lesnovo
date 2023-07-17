import React from "react";

// components
import { Navbar, Footer } from "./components";

// pages
import { Home, About, Features, Tours, Testimonials, Contact } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Tours />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
