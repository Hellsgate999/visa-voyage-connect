import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { User, LogOut, Menu, X } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";
import AuthModal from "./AuthModal";

const AuthHeader = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useAuth();

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error: any) {
      toast.error("Failed to log out");
    }
  };

  return (
    <>
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="text-2xl font-bold text-gray-900">SlotPilot</div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/countries")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Countries
              </button>
              <button
                onClick={() => navigate("/visa-services")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Visa Services
              </button>
              <button
                onClick={() => navigate("/community")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Community
              </button>

              {user === undefined ? (
                <div className="w-24 h-10 bg-gray-200 animate-pulse rounded" />
              ) : user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{user.email}</span>
                  </div>
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Login / Sign Up
                </Button>
              )}
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    navigate("/");
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    navigate("/countries");
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Countries
                </button>
                <button
                  onClick={() => {
                    navigate("/visa-services");
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Visa Services
                </button>
                <button
                  onClick={() => {
                    navigate("/community");
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Community
                </button>

                {user === undefined ? (
                  <div className="w-full h-10 bg-gray-200 animate-pulse rounded" />
                ) : user ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                      <User className="h-4 w-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{user.email}</span>
                    </div>
                    <Button
                      onClick={handleSignOut}
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Login / Sign Up
                  </Button>
                )}
              </nav>
            </div>
          )}
        </div>

        <div className="bg-yellow-100 text-yellow-800 py-2 px-4 text-center text-sm font-medium overflow-hidden">
          <div className="marquee">
            Beware of scammers! Always verify information before proceeding. Stay connected for updates!
          </div>
        </div>
      </header>

      <AuthModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default AuthHeader;
