import { useClerk, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // or window.location.href if not using react-router-dom
import { Menu as HamburgerIcon } from "lucide-react"; // Importing the Menu (Hamburger) icon

const CustomUserButton = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate(); // or use window.location.href

  const [open, setOpen] = useState(false); // For dropdown toggle

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="relative">
      {/* Hamburger Menu Icon */}
      <button
        className="flex items-center space-x-2 p-2 -full focus:outline-none"
        onClick={() => setOpen(!open)} // Toggle dropdown
      >
        {/* Using Lucide's Hamburger (Menu) Icon */}
        <HamburgerIcon className="h-8 w-8" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
          {/* Admin Panel Option */}
          <button
            onClick={() => navigate("/admin-panel")}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Admin Panel
          </button>

        
          {/* Sign Out Option */}
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