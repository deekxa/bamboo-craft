import { useClerk, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Menu as HamburgerIcon } from "lucide-react"; 

const CustomUserButton = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate(); 

  const [open, setOpen] = useState(false); 

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 p-2 -full focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <HamburgerIcon className="h-8 w-8" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
          <button
            onClick={() => navigate("/admin-panel")}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Admin Panel
          </button>
        
          <button
            onClick={handleSignOut}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomUserButton;