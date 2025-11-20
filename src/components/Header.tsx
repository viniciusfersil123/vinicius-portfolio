type Props = {
  onLogoClick?: () => void;
};

export default function Header({ onLogoClick }: Props) {
  return (
    <header className="navbar">
      <div
        className="logo"
        onClick={() => (onLogoClick ? onLogoClick() : window.scrollTo({ top: 0, behavior: "smooth" }))}
        style={{ cursor: "pointer" }}
      >
        Vinícius Fernandes
      </div>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#art">Arte</a>
        <a href="#tech">Hardware & DSP</a>
        <a href="#software">Software</a>
        <a href="#research">Pesquisa</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
