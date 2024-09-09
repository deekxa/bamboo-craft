import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./components/Home";
import Form from "./components/Login";
import AboutUs from "./components/AboutUs";
import { Lighting } from "./components/Lighting";
import { Decor } from "./components/Decor";
import { PersonalCare } from "./components/PersonalCare";
import ContactUs from "./components/contact";
import Approval from "./components/approval";
import { ApprovalProvider } from "./components/approvalContext";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import ProductDetail from "./components/product/ProductDetail";
import { CartProvider } from "./components/CartContext";
import Adminpanel from "./components/adminpanel";
import Cart from "./components/Cart";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApprovalProvider>
        <CartProvider>
          <BrowserRouter>
            <header>
              <SignedOut>
                {/* Center the sign-in form using Tailwind */}
                <div className="flex justify-center items-center h-screen">
                  <SignIn />
                </div>
              </SignedOut>
            </header>
            <div>
              <SignedIn>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Form />} />
                  <Route path="/admin-panel" element={<Adminpanel />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/decor" element={<Decor />} />
                  <Route path="/lighting" element={<Lighting />} />
                  <Route path="/decor/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/personalcare" element={<PersonalCare />} />
                  <Route path="/approval" element={<Approval />} />
                </Routes>
              </SignedIn>
            </div>
          </BrowserRouter>
        </CartProvider>
      </ApprovalProvider>
    </QueryClientProvider>
  );
}

export default App;
