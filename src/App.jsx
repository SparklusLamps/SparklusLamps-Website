import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import PastWorks from "./components/PastWorks/PastWorks";
import Statistics from "./components/Statistics/Statistics";
import CustomizationForm from "./components/CustomizationForm/CustomizationForm";
import Products from "./components/Products/Products";
import FAQs from "./components/FAQs/FAQs";
import BulkInquiry from "./components/BulkInquiry/BulkInquiry";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsOfService from "./pages/TermsOfService";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <PastWorks />
              <Statistics />
              <CustomizationForm />
              <Products />
              <FAQs />
              <BulkInquiry />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

export default App;
