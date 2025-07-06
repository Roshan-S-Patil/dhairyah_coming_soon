
const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">Dhairyah</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Where discipline meets community
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
            </div>

            {/* Social Media Placeholders */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs text-muted-foreground">T</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs text-muted-foreground">I</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs text-muted-foreground">L</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Dhairyah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
