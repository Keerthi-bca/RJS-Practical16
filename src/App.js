import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";

function App() {

  return (
   
      <main>
        <h1> Welcome to my page</h1>
<BrowserRouter>
<Navigation/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/aboutus" element={<About/>}/>
  <Route path="/contactus" element={<ContactUs/>}/>
</Routes>
</BrowserRouter>
        {/* TODO:
            1. Add BrowserRouter
            2. Add Routes
            3. Create Route for Home
            4. Create Route for About Us
            5. Create Route for Contact Us
        */}

      </main>
  );
}

export default App;
