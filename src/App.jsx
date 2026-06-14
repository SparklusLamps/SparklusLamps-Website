import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import PastWorks from "./components/PastWorks/PastWorks";
import CollaborationProcess from "./components/CollaborationProcess/CollaborationProcess";
import CustomizationVision from "./components/CustomizationVision/CustomizationVision";
import Statistics from "./components/Statistics/Statistics";
import CollaborationHub from "./components/CollaborationHub/CollaborationHub";
import Products from "./components/Products/Products";
import FAQs from "./components/FAQs/FAQs";
import BulkInquiry from "./components/BulkInquiry/BulkInquiry";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsOfService from "./pages/TermsOfService";
import DesignersArchitects from "./pages/DesignersArchitects";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BulkOrders from "./pages/BulkOrders";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              {/* <About /> */}
              {/* <Statistics /> */}
              <CustomizationVision />
              <PastWorks />
              <CollaborationProcess />
              <CollaborationHub />
              {/* <Products /> */}
              {/* <FAQs /> */}
              {/* <BulkInquiry /> */}
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/designers-architects" element={<DesignersArchitects />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/bulk-orders" element={<BulkOrders />} />
      </Routes>
    </div>
  );
}

export default App;
