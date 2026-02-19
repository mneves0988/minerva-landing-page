const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm font-bold minerva-gradient-text">Minerva</span>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Minerva. Assistente Digital para Clínicas.
      </p>
    </div>
  </footer>
);

export default Footer;
