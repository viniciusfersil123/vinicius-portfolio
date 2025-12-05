import { useParams } from "./lib/routerShim";
import "./App.css";
import Carousel from "./components/Carousel";
import Highlights from "./components/Highlights";
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
    {
      title: "TUDOS",
      text: `Selo dedicado ao lançamento de artistas que trabalham com composição experimental.
`,
      image: "/tudos_thumb.jpg",
    },
    {
      title: "9 chifres",
      text: "Peça eletrônica baseada na canção lituana Kalėdų rytu rožė inžydo, apresentada na 32ª Bienal de São Paulo.",
      image: "/9chifres_thumb.jpg",
    },
    {
      title: "Metempsicose",
      text: "nstalação sonora. Um rádio sintonizado em uma estação local aleatória controla dois alto-falantes modificados conectados a uma guitarra e a um tamtamonnected to a guitar and a tamtam.",
      image: "/metempsicose_thumb.jpg",
    },
    {
      title: "¿Música?",
      text: "Série de performances/exposições de arte sonora/música experimental realizada desde 2005",
      image: "/musica_thumb.jpg",
    },
    {
      title: "Móbile de vaca morta com vergalhões de ferro [...]",
      text: "Instalação com ossos, alto-falantes, vergalhões de ferro e com áudio de álbuns kitsch de Augusto Piccinini",
      image: "/mobile_thumb.jpg",
    },
    {
      title: "Fitosintetizador",
      text: "Instalação sonora interativa que utiliza plantas como controladoras de síntese sonora.",
      image: "/fitosintetizador_thumb.jpg",
    },
    {
      title: "Echos of the deep",
      text: "Software de sonificação de dados metabólicos de esponjas marinhas. Apresentado no contexto 12th World Sponge Conference",
      image: "/sponges_thumb.jpg",
    },
    {
      title: "Discografia",
      text: "Reunião de todos discos, singles e colaborações",
      image: "/discografia_thumb.jpg",
    },
  ];

  const techCards = [
    {
      title: "Menis",
      text: "Desenvolvimento de instrumentos eletrônicos, síntese embarcada e ferramentas para artistas e pesquisadores.",
      image: "/menis_thumb.jpg",
    },
    {
      title: "Granular Player - daisySP",
      text: "Contribuição para a DaisySP Library com um player granular otimizado para hardware Daisy.",
      image: "/granular_thumb.jpg",
    },
    {
      title: "Grupo de Embarcados IME-USP",
      text: "Grupo de pesquisa e desenvolvimento em sistemas embarcados para música e áudio.",
      image: "/embarcados_thumb.jpg",
    },
  ];

  const softwareCards = [
    {
      title: "UOL",
      text: "Desenvolvimento de backend e frontend para o maior portal de notícias da América Latina.",
      image: "/uol_thumb.jpg",
    },
    {
      title: "Nexo Jornal",
      text: "Atualização de stack, integração de dados e desenvolvimento de novas funcionalidades para o portal de notícias.",
      image: "/nexo_thumb.jpg",
    },
  ];

  // nova coleção: Pesquisa & Publicações
  const publicationCards = [
    {
      title: "Cut-Up as Political Practice",
      text: "Artigo para a revista Norient analisando o cut-up de Burroughs como prática política contra manipulação midiática.",
      image: "/cutup_thumb.jpg",
    },
    {
      title:
        "A Emergência do Sujeito na Narrativa do Prelúdio Op. 28 no. 14 de Chopin",
      text: "Artigo publicado na revista Musica Theorica",
      image: "/chopin_thumb.jpg",
    },
    {
      title:
        "The medium becomes infected by the message: Boris Groys' submedial suspicion as viral tropes in William Burroughs.",
      text: "Análise das cut-ups de Burroughs via Groys, apresentada e publicada nos proceedings da Sonologia 2019.",
      image: "/sonologia_thumb.jpg",
    },
  ];

  // expõe arrays no window para o Detail
  (window as any).__APP_CARDS__ = cards;
  (window as any).__APP_TECH__ = techCards;
  (window as any).__APP_SOFT__ = softwareCards;
  (window as any).__APP_PUBS__ = publicationCards;

  const params = useParams();

  if (params.slug) {
    return (
      <div className="app">
        <Detail />
        <footer className="footer">
          <p>© {new Date().getFullYear()} Vinícius Fernandes — Arte, som & tecnologia.</p>
        </footer>
      </div>
    );
  }

  const openItem = (it: any) => {
    const slug = (it.slug as string) || slugify(it.title || "");
    const url = `/item/${slug}`;
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

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

          <div className="hero-highlights-wrapper">
            <Highlights />
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
            Vinícius Fernandes é desenvolvedor, pesquisador, músico e artista
            sonoro. Nascido em São Paulo, formou-se em Estudos Literários
            (UNICAMP) e tem título de mestre em Sonologia (USP). Atualmente,
            realiza um doutorado em áudio embarcado em cotutela entre o IME-USP
            e a Technische Universität Berlin (DAAD), investigando plataformas
            abertas de áudio, DSP em hardware de baixa potência, acessibilidade
            técnica e práticas de desenvolvimento situadas. Coordena um grupo de
            pesquisa em sistemas embarcados para música na USP e contribui
            ativamente para projetos de código aberto, como a DaisySP Library,
            trabalhando com C/C++, drivers e programação de microcontroladores.
            Profissionalmente, atuou no Nexo Jornal e na UOL como desenvolvedor
            web (Node.js, TypeScript, Docker, Next.js). É fundador da Menis Tech
            Design, criando instrumentos eletrônicos customizados, projetos de
            tecnologia criativa e cursos em eletrônica, síntese e controladores
            MIDI. No campo artístico, produz desde 2014 o selo experimental
            TUDOS e já se apresentou em eventos como o I Colóquio
            Franco-Brasileiro de Análise e Criação Musicais (ao lado de Gérard
            Assayag/IRCAM), a 32ª Bienal de São Paulo e turnês europeias com o
            trio Cassini. Publica regularmente artigos sobre práticas sonoras
            experimentais, mídia e literatura.{" "}
          </p>
        </section>

        {/* ART */}
        <section id="art" className="section">
          <h2>Art & Sound</h2>
          <p>
            Uma seleção de performances, instalações sonoras e projetos
            colaborativos.
          </p>

          <Carousel
            items={cards}
            slidesToShow={3}
            autoplay={true}
            onItemClick={openItem}
          />
        </section>

        {/* TECH */}
        <section id="tech" className="section">
          <h2>Hardware & DSP</h2>
          <p>
            Desenvolvimento de instrumentos eletrônicos, síntese embarcada e
            ferramentas para artistas e pesquisadores.
          </p>
          <Carousel
            items={techCards}
            slidesToShow={3}
            autoplay={true}
            onItemClick={openItem}
          />
        </section>

        {/* RESEARCH & PUBLICATIONS (nova seção) */}
        <section id="publications" className="section">
          <h2>Pesquisa & Publicações</h2>
          <p>
            Seleção de artigos, capítulos, apresentações e relatórios
            relacionados à pesquisa e produção acadêmica.
          </p>

          <Carousel
            items={publicationCards}
            slidesToShow={3}
            autoplay={false}
            onItemClick={openItem}
          />
        </section>

        {/* SOFTWARE */}
        <section id="software" className="section">
          <h2>Software & Web Development</h2>
          <p>
            Atuação como desenvolvedor web e criador de ferramentas digitais
            para áudio, arte e educação.
          </p>
          <Carousel
            items={softwareCards}
            slidesToShow={2}
            autoplay={true}
            onItemClick={openItem}
          />
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
        <p>© {new Date().getFullYear()} Vinícius Fernandes — Arte, som & tecnologia.</p>
      </footer>
    </div>
  );
}

export default App;
