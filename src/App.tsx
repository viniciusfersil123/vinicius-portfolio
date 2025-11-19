import { useEffect, useRef, useState } from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function App() {
  // dados dos cards (fácil de manter e reutilizar)
  const cards = [
    { title: "Obra / Projeto 1", text: "Descrição curtinha, ano, contexto." },
    {
      title: "Obra / Projeto 2",
      text: "Instalação sonora apresentada na USP.",
    },
    { title: "Obra / Projeto 3", text: "Performance colaborativa." },
    { title: "Obra / Projeto 4", text: "Outro trabalho aqui." },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(260); // fallback

  // calcula largura do passo (largura do card + gap) depois do mount
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const computeWidth = () => {
      const children = el.querySelectorAll(".card.small");
      if (children.length >= 2) {
        const a = children[0] as HTMLElement;
        const b = children[1] as HTMLElement;
        const gap = b.offsetLeft - a.offsetLeft - a.offsetWidth;
        const cw = a.offsetWidth + gap;
        setCardWidth(cw);
        return cw;
      } else if (children.length === 1) {
        const a = children[0] as HTMLElement;
        setCardWidth(a.offsetWidth);
        return a.offsetWidth;
      }
      return cardWidth;
    };

    // inicializa posição para o primeiro card real (índice 1, pois o índice 0 é clone do último)
    const init = () => {
      // aguarda render
      requestAnimationFrame(() => {
        if (!el) return;
        const children = el.querySelectorAll(".card.small");
        if (children.length > 1) {
          const cw = computeWidth();
          // posiciona no primeiro real
          el.scrollLeft = cw;
        }
      });
    };

    init();
    window.addEventListener("resize", computeWidth);
    return () => window.removeEventListener("resize", computeWidth);
  }, [carouselRef]);

  // navegação por setas (avança/recua um passo)
  const scrollByStep = (dir: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  // lógica de loop: quando chegar ao clone, pula para a posição real correspondente sem animação
  const onScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".card.small");
    const n = cards.length; // número de cards reais
    if (children.length < n + 2) return; // sanity

    const idxFloat = el.scrollLeft / cardWidth;

    // tolerância para detectar os clones (mais robusto durante animação/smooth scroll)
    // se estamos no clone do último (índice ~0) -> pula para último real (índice n)
    if (idxFloat <= 0.5) {
      el.style.scrollBehavior = "auto";
      el.scrollLeft = cardWidth * n;
      setTimeout(() => (el.style.scrollBehavior = "smooth"), 60);
      return;
    }

    // se estamos no clone do primeiro (índice ~n+1) -> pula para primeiro real (índice 1)
    if (idxFloat >= n + 0.5) {
      el.style.scrollBehavior = "auto";
      el.scrollLeft = cardWidth;
      setTimeout(() => (el.style.scrollBehavior = "smooth"), 60);
      return;
    }
  };
  return (
    <div className="app">
      <header className="navbar">
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <h1>
              Arte, som & tecnologia
              <br />
            </h1>
            <p>
              Profissional de áudio/DSP e desenvolvimento web, com atuação em
              arte sonora, síntese, sistemas embarcados e plataformas abertas de
              áudio.
            </p>

            <div className="hero-buttons">
              <a href="#art" className="button primary">
                Ver portfolio artístico
              </a>
              <a href="#tech" className="button secondary">
                Ver projetos de tecnologia
              </a>
            </div>
          </div>

          {/* <div className="hero-pillars">
            <div className="pillar">
              <h3>Art & Sound</h3>
              <p>Instalações, performances e experimentos sonoros (2014–2019).</p>
            </div>
            <div className="pillar">
              <h3>Audio Engineering & DSP</h3>
              <p>Menis, síntese, hardware embarcado, workshops e instrumentos DIY.</p>
            </div>
            <div className="pillar">
              <h3>Software & Research</h3>
              <p>
                Desenvolvimento web, ferramentas para artistas e pesquisa em áudio embarcado
                (USP & TU Berlin).
              </p>
            </div>
          </div> */}
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>Sobre</h2>
          <p>
            Vinícius Fernandes é artista, pesquisador e desenvolvedor, atuando
            desde 2014 em arte sonora, síntese, hardware musical e
            desenvolvimento de software. Sua trajetória inclui participação na
            32ª Bienal de São Paulo, performances e apresentações em cidades
            como Berlim, Nápoles, Riga, Tallinn, Vilnius e Barcelona, além de
            projetos em instituições como SESC e Espaço das Artes (USP). É
            criador da Menis, dedicada a hardware e ferramentas de áudio, e
            também trabalhou como desenvolvedor web em empresas como UOL e Nexo
            Jornal. Atualmente é doutorando em cotutela entre a USP (IME) e a TU
            Berlin, pesquisando áudio embarcado, DSP e plataformas abertas de
            áudio sob uma perspectiva crítica e situada.{" "}
          </p>
          <p>
            Atualmente faço doutorado em áudio embarcado entre a USP e a TU
            Berlin, pesquisando plataformas abertas de áudio, acessibilidade
            tecnológica e práticas de desenvolvimento situadas — sempre em
            diálogo com arte sonora e práticas experimentais.
          </p>
        </section>

        {/* ART */}
        <section id="art" className="section">
          <h2>Art & Sound (Arquivo 2014–2019)</h2>
          <p>
            Uma seleção de performances, instalações sonoras e projetos
            colaborativos.
          </p>

          <Slider {...sliderSettings}>
            {cards.map((c, i) => (
              <div key={i}>
                <article className="card small">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              </div>
            ))}
          </Slider>
        </section>

        {/* TECH */}
        <section id="tech" className="section">
          <h2>Hardware & DSP</h2>
          <p>
            Desenvolvimento de instrumentos eletrônicos, síntese embarcada e
            ferramentas para artistas e pesquisadores.
          </p>
          <div className="cards-grid">
            <article className="card">
              <h3>Menis – Synths & Pedais</h3>
              <p>
                Marca própria de instrumentos, pedais e módulos de síntese, com
                foco em experimentação sonora e acessibilidade.
              </p>
            </article>
            <article className="card">
              <h3>Dub Siren / Dub Tools</h3>
              <p>
                Placas dedicadas para dub, sirenes, delays e explorações de
                feedback em performance ao vivo.
              </p>
            </article>
            <article className="card">
              <h3>ESP32 & DaisySP</h3>
              <p>
                Projetos de áudio embarcado usando ESP32, Daisy e bibliotecas
                abertas para síntese e processamento digital de sinais.
              </p>
            </article>
          </div>
        </section>

        {/* SOFTWARE */}
        <section id="software" className="section">
          <h2>Software & Web Development</h2>
          <p>
            Atuação como desenvolvedor web e criador de ferramentas digitais
            para áudio, arte e educação.
          </p>
          <div className="cards-grid">
            <article className="card">
              <h3>Desenvolvimento Web</h3>
              <p>
                Experiência com JavaScript, TypeScript, Node.js, React, Next.js,
                Docker, AWS e outras tecnologias, em empresas como UOL.
              </p>
            </article>
            <article className="card">
              <h3>Ferramentas para Artistas</h3>
              <p>
                Pequenos apps, patches e sistemas que facilitam a criação
                sonora, a performance e o ensino de computação musical.
              </p>
            </article>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="section">
          <h2>Pesquisa</h2>
          <p>
            Doutorado em áudio embarcado entre o Instituto de Matemática e
            Estatística da USP e a TU Berlin (Audio Communication Group), com
            foco em plataformas abertas, autonomia tecnológica e crítica das
            infraestruturas de desenvolvimento.
          </p>
          <p>
            Aqui você pode depois listar textos, apresentações, slides e
            projetos de pesquisa relacionados à sua tese e colaborações
            internacionais.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2>Contato</h2>
          <p>
            Quer conversar sobre um projeto, aula, colaboração ou consultoria
            técnica?
          </p>
          <ul>
            <li>
              E-mail:{" "}
              <a href="mailto:viniciusfersil@gmail.com">
                viniciusfersil@gmail.com
              </a>
            </li>
            {/* depois você pode adicionar GitHub, Instagram, LinkedIn etc. */}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Vinícius Fernandes — Arte, som &
          tecnologia.
        </p>
      </footer>
    </div>
  );
}

export default App;
