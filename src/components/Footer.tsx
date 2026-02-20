const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold minerva-gradient-text" style={{ fontFamily: "'Petrona', serif" }}>Minerva</span>
        <span className="text-xs text-muted-foreground">|</span>
        <span className="text-xs text-muted-foreground">
          Desenvolvido por{" "}
          <span className="font-bold text-foreground" style={{ fontFamily: "'Petrona', serif" }}>
            CYRIUS
          </span>
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        © 2026 Minerva. Assistente Digital para Clínicas.
      </p>
    </div>
  </footer>
);

export default Footer;
