import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={logo} alt="Insurance RR Logo" className="w-8 h-8 object-contain" />
          <span className="text-background font-heading font-bold tracking-wide">
            INSURANCE RR
          </span>
        </div>
        <p className="text-background/60 text-sm">
          © {new Date().getFullYear()} Insurance RR. Всі права захищено.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
