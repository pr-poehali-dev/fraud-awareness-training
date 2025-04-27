import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-cob-dark shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Shield className="h-8 w-8 mr-2 text-cob-light" />
            <span className="text-xl font-bold text-cob-light">ЦОБ</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
              {[
                { title: "Главная", path: "/" },
                { title: "Обучение", path: "/courses" },
                { title: "Ресурсы", path: "/resources" },
                { title: "О компании", path: "/about" },
                { title: "FAQ", path: "/faq" }
              ].map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link to={item.path}>
                    <NavigationMenuLink
                      className="px-4 py-2 text-cob-light hover:bg-cob-darker rounded transition-colors"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Button 
            className="bg-cob-light text-cob-dark hover:bg-opacity-90"
          >
            Связаться с нами
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cob-light" 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cob-dark p-4">
          <nav className="flex flex-col space-y-3">
            {[
              { title: "Главная", path: "/" },
              { title: "Обучение", path: "/courses" },
              { title: "Ресурсы", path: "/resources" },
              { title: "О компании", path: "/about" },
              { title: "FAQ", path: "/faq" }
            ].map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="text-cob-light py-2 px-3 hover:bg-cob-darker rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button 
              className="bg-cob-light text-cob-dark hover:bg-opacity-90 w-full mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Связаться с нами
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
