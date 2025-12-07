import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "Про нас" },
    { href: "#services", label: "Послуги" },
    { href: "#partners", label: "Партнери" },
    { href: "#contacts", label: "Контакти" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Insurance RR Logo" className="w-10 h-10 object-contain" />
          <span className="text-primary font-heading font-bold text-lg tracking-wide hidden sm:block">
            INSURANCE RR
          </span>
        </a>

        {/* Search - Desktop */}
        <div className="hidden md:flex relative max-w-xs flex-1">
          <Input
            type="text"
            placeholder="Пошук послуг..."
            className="pr-10 bg-secondary border-border"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Пошук послуг..."
                className="pr-10 bg-secondary border-border"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
