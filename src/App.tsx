import { useParams } from "./lib/routerShim";
import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Detail from "./pages/Detail";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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

  const techCards = [
    {
      title: "Menis – Synths & Pedais",
      text: "Marca própria de instrumentos, pedais e módulos de síntese, com foco em experimentação sonora e acessibilidade.",
    },
    {
      title: "Dub Siren / Dub Tools",
      text: "Placas dedicadas para dub, sirenes, delays e explorações de feedback em performance ao vivo.",
    
    },
    {
      title: "ESP32 & DaisySP",
      text: "Projetos de áudio embarcado usando ESP32, Daisy e bibliotecas abertas para síntese e processamento digital de sinais.",
    },
    {
      title: "Modular Patch A",
      text: "Experimentos com patches modulares e feedback controlado em instalação.",
    },
    {
      title: "Pedal Prototype",
      text: "Protótipo de pedal de delay com circuito híbrido analógico/digital.",
    },
    {
      title: "Live Set – 2018",
      text: "Conjunto de performances ao vivo usando circuit bending e síntese granular.",
    },
  ];

  const softwareCards = [
    {
      title: "Desenvolvimento Web",
      text: "Experiência com JavaScript, TypeScript, Node.js, React, Next.js, Docker, AWS e outras tecnologias, em empresas como UOL.",
    },
    {
      title: "Ferramentas para Artistas",
      text: "Pequenos apps, patches e sistemas que facilitam a criação sonora, a performance e o ensino de computação musical.",
    },
    {
      title: "Patch Builder",
      text: "Uma pequena ferramenta para construir patches modulares em browser.",
    },
    {
      title: "Visualizer",
      text: "Experimentos com visualização reativa para performance sonora.",
    },
  ];

  // (allItems moved to src/data/items.ts if needed)

  const params = useParams();

  // if a slug is present in the URL, show the standalone detail page
  if (params.slug) {
    return (
      <div className="app">
        <Detail />
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Vinícius Fernandes — Arte, som &
            tecnologia.
          </p>
        </footer>
      </div>
    );
  }

  // onItem click: just change URL (Detail reads slug from path)
  const openItem = (it: any) => {
    const slug = (it.slug as string) || slugify(it.title || "");
    const url = `/item/${slug}`;
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  // closeDetail not needed; Detail uses back navigation

  return (
    <div className="app">
      <Header />

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

          <Carousel items={cards} slidesToShow={3} autoplay={true} onItemClick={openItem} />
        </section>

        {/* TECH */}
        <section id="tech" className="section">
          <h2>Hardware & DSP</h2>
          <p>
            Desenvolvimento de instrumentos eletrônicos, síntese embarcada e
            ferramentas para artistas e pesquisadores.
          </p>
          <Carousel items={techCards} slidesToShow={3} autoplay={true} onItemClick={openItem} />
        </section>

        {/* SOFTWARE */}
        <section id="software" className="section">
          <h2>Software & Web Development</h2>
          <p>
            Atuação como desenvolvedor web e criador de ferramentas digitais
            para áudio, arte e educação.
          </p>
          <Carousel items={softwareCards} slidesToShow={2} autoplay={true} onItemClick={openItem} />
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

  {/* Detail overlay / page (shown when URL contains /item/:slug) */}
  {params.slug && <Detail />}

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
