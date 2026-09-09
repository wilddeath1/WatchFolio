const Footer = () => {
  return (
    <footer className="relative px-6 md:px-12 py-7 bg-background border-t border-border">
      <div className="w-full flex flex-col md:block items-center">

        {/* LOGO */}
        <div
          className="
            md:absolute
            md:left-12
            md:top-1/2
            md:-translate-y-1/2
            text-xl
            font-bold
            mb-2
            md:mb-0
          "
        >
          <span className="text-text">Watch</span>
          <span className="text-primary">Folio</span>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-muted">
          © 2026 WatchFolio. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

