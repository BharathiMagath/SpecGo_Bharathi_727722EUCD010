// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EyeglassProduct from './components/EyeglassProduct';
import SunglassProduct from './components/SunglassProduct';
import ReadingGlassesProduct from './components/ReadingglassProduct';
import ContactLensesProduct from './components/ContactlensProduct';
import AccessoriesProduct from './components/AccessoriesProduct';
import ComputerglassProduct from './components/ComputerglassProduct';
import ServicePage from './components/ServicePage';
import Location from './components/Location';
import ThreeD from './components/ThreeD';
import ProfilePage from './components/ProfilePage';
import Cart from './contexts/Cart';
import { StoreProvider } from './contexts/StoreContext';
import {Wishlist} from './contexts/Wishlist';
import BuyNow from './contexts/BuyNow';
import PlaceOrder from './contexts/PlaceOrder';
import OrderConfirmation from './contexts/OrderConfirmation';
import Review from './contexts/Review';
import './App.css'; // Import global styles
import ContactglassProduct from './components/ContactglassProduct';
import AccessoriesProductWomen from './components/AccessoriesProductWomen';
import ComputerglassProductWomen from './components/ComputerglassProductWomen';
import EyeglassProductWomen from './components/EyeglassProductWomen';
import SunglassProductWomen from './components/SunglassProductWomen';
import ReadingglassProductWomen from './components/ReadingglassProductWomen';
import ContactlensProductKids from './components/ContactlensProductKids';
import AccessoriesProductKids from './components/AccessoriesProductKids';
import ComputerglassProductKids from './components/ComputerglassProductKids';
import EyeglassProductKids from './components/EyeglassProductKids';
import SunglassProductKids from './components/SunglassProductKids';
import ReadingglassProductKids from './components/ReadingglassProductKids';
import Shape from './components/Shape';
import FastTrack from './info/FastTrack';
import RayBan from './info/RayBan';
import Prada from './info/Prada';
import DeliveryDetails from './contexts/DeliveryDetails';
import EyeStrain from './EyeTesting/EyeStrain';
import EyeStrainQuiz from './EyeTesting/EyeStrainQuiz';
import AdminDashboard from './Admin/AdminDashboard';
import InstructionComponent from './EyeTesting/InstructionComponent';
import NearVisionTest from './EyeTesting/NearVisionTest';
import TestComponent from './EyeTesting/TestComponent';
import App1 from './EyeTesting/App1';
import Vogue from './info/Vogue';
import Otp from './components/Otp';
const App = () => (
  <Router>
    <div className="App">
    <StoreProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eyeglass-product" element={<EyeglassProduct />} />
        <Route path="/sunglass-product" element={<SunglassProduct />} />
        <Route path="/reading-glasses-product" element={<ReadingGlassesProduct />} />
        <Route path="/contact-lenses-product" element={<ContactLensesProduct />} />
        <Route path="/accessories-product" element={<AccessoriesProduct />} />
        <Route path="/computer-glasses-product" element={<ComputerglassProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/location" element={<Location />} />
         <Route path="/service" element={<ServicePage />} />
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
          <Route path="/review" element={<Review />} />
          <Route path="/ThreeD" element={<ThreeD />} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/contactglassproduct" element={<ContactglassProduct/>} />
          <Route path="/accessoryproductwomen" element={<AccessoriesProductWomen/>} />
          <Route path="/computerglassproductwomen" element={<ComputerglassProductWomen/>} />
          <Route path="/eyeglassproductwomen" element={<EyeglassProductWomen/>} />
          <Route path="/sunglassproductwomen" element={<SunglassProductWomen/>} />
          <Route path="/readingglassproductwomen" element={<ReadingglassProductWomen/>} />
          <Route path="/contactlensproductkids" element={<ContactlensProductKids/>} />
          <Route path="/accessoryproductkids" element={<AccessoriesProductKids/>} />
          <Route path="/computerglassproductkids" element={<ComputerglassProductKids/>} />
          <Route path="/eyeglassproductkids" element={<EyeglassProductKids/>} />
          <Route path="/sunglassproductkids" element={<SunglassProductKids/>} />
          <Route path="/readingglassproductkids" element={<ReadingglassProductKids/>} />
          <Route path="/search" element={<SunglassProduct />} />
          <Route path="/shape" element={<Shape />} />
          <Route path="/fasttrack" element={<FastTrack />} />
          <Route path="/rayban" element={<RayBan />}/>
          <Route path="/prada" element={<Prada/>}/>
          <Route path="/deliverydetails" element={<DeliveryDetails/>}/>
          <Route path="/eyestrain" element={<EyeStrain/>}/>
          <Route path="/eyestrainquiz" element={<EyeStrainQuiz/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/instructioncomponent" element={<InstructionComponent/>}/>
          <Route path="/nearvisiontest" element={<NearVisionTest/>}/>
          <Route path="/testcomponent" element={<TestComponent/>}/>
          <Route path="/app1" element={<App1/>}/>
          <Route path="/vogue" element={<Vogue/>}/>
          <Route path="/otp" element={<Otp/>}/>
      </Routes>
      </StoreProvider>
    </div>
  </Router>
);

export default App;
