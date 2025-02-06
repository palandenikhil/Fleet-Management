import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


import Addon from "./Components/Addon";
import Signup from "./Components/Signup";
import LoginForm from "./Components/LoginForm";
import CustomerForm from "./Components/CustomerInfo";
import StaffLogin from "./Components/StaffLogin";
import StaffPage from "./Components/StaffPage";
import BookingByStaff from "./Components/BookingByStaff";
import StaffHandOver from "./Components/StaffHandOver";
//import StaffBooking from "./Components/StaffBooking";
import CancelBookingByStaff from "./Components/CancelBookingByStaff";
import StaffBookingForm from "./Components/StaffBookingForm";


const App = () => {
  return (
    
    <Router>
    <div className="App">
      <Routes>
        {/* <Route path="/LoginComponent" element={<LoginComponent/>} />
        <Route path="/" element={<Home/>} /> */}
    
        <Route path="/StaffLogin" element={<StaffLogin/>} />
        <Route path="/StaffPage" element={<StaffPage/>} />
        <Route path="/BookingByStaff" element={<BookingByStaff/>} />
        {/* <Route path="/AboutUs" element={<AboutUs/>} /> */}
        {/* <Route path="/BookingFormRitik" element={<BookingFormRitik/>} />
        <Route path="/Modify" element={<Modify/>} /> */}
        {/* <Route path="/ReturnLogic" element={<ReturnLogic/>} />
        <Route path="/Rlogic" element={<Rlogic/>} />
        <Route path="/ConfirmBooking" element={<ConfirmBooking/>} />
        <Route path="/CustomerForm" element={<CustomerForm/>} />
        <Route path="/AffiliatedHotels" element={<AffiliatedHotels/>} />
        <Route path="/WeatherRedirect" element={<WeatherRedirect/>} />
        <Route path="/CareerPage" element={<CareerPage/>} />
        <Route path="/Car" element={<Car/>} />
        <Route path="/Return" element={<Return/>} /> */}
        <Route path="/StaffHandOver" element={<StaffHandOver/>} />
        <Route path="/CancelBookingByStaff" element={<CancelBookingByStaff/>} />
        <Route path="/StaffBookingForm" element={<StaffBookingForm/>} />
        {/* <Route path="/Cancel" element={<Cancel/>} /> */}
        {/* <Route path="/PDFGenerator" element={<PDFGenerator/>} />
        <Route path="/BookingForm" element={<BookingForm/>} />
        <Route path="/HubSelectionForm" element={<HubSelectionForm/>} />
        <Route path="/ReturnHubSelectionForm" element={<ReturnHubSelectionForm/>} />
        <Route path="/CustomerCare" element={<CustomerCare/>} />
        <Route path="/AddonList" element={<AddonList/>} /> */}
        {/* Add more routes here for other components/pages */}
      </Routes>
      
    </div>
  </Router>

  );
};

export default App;
