import {Routes,Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import ServiceDetail from "./pages/services/ServiceDetail";
// import Partners from "./pages/partners/Partners";
//import PartnerProfile from "./pages/partners/PartnerProfile";
import DonationCancel from "./pages/DonationCancel";
import DonationFailure from "./pages/DonationFailure";
import DonationSuccess from "./pages/DonationSuccess";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import BecomePartner from "./pages/BecomePartner";
// import Login from "./pages/account/Login";
import About from "./pages/About";
import Donate from "./pages/Donation";
import Safety from "./pages/Safety";
import Legal from "./pages/legal/Legal";
import NotFound from "./pages/NotFound";

export default function App(){return <Routes><Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/services/:id" element={<ServiceDetail/>}/>
   {/*<Route path="/partners" element={<Partners/>}/>
    <Route path="/partners/:id" element={<PartnerProfile/>}/>
    <Route path="/login" element={<Login/>}/>*/} 
    <Route path="/donate/success" element={<DonationSuccess />} />
<Route path="/donate/cancel" element={<DonationCancel />} />
<Route path="/donate/failure" element={<DonationFailure />} />
    <Route path="/become-a-partner" element={<BecomePartner/>}/>
     <Route path="/book" element={<Booking/>}/>
    <Route path="/booking-success" element={<BookingSuccess/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/safety" element={<Safety/>}/>
<Route path="/privacy" element={<Legal title="Privacy Policy"/>}/>
<Route path="/terms" element={<Legal title="Terms & Conditions"/>}/>
<Route path="/donate" element={<Donate />} />
<Route path="*" element={<NotFound/>}/></Route></Routes>}
