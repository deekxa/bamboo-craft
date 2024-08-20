

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/Home";
import Form from "./components/Login";
import Signup from "./components/Signup";
import { AboutUs } from "./components/AboutUs";



function App() {
  return (
    <div>
 <BrowserRouter>
     
    
    <Routes>
    <Route path="/" element={<HomePage />} />
       
        <Route path="/login" element={<Form />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/aboutus" element={<AboutUs/>} />

        
        
      
      </Routes>
      </BrowserRouter> 
    
    
     
    
     </div>
    
  
 
    

  );
  
  
  
       

}
export default App;