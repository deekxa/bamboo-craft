

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Form from "./components/login";
import Signup from "./components/signup";
import HomePage from "./components/Home";


function App() {
  return (
    <div>
 <BrowserRouter>
     
    
    <Routes>
    <Route path="/" element={<HomePage />} />
       
        <Route path="/login" element={<Form />} />
        <Route path="/signup" element={<Signup/>} />
      
      </Routes>
      </BrowserRouter> 
    
    
     
    
     </div>
    
  
 
    

  );
  
  
  
       

}
export default App;
