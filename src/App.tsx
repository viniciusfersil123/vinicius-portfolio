import { useEffect } from "react";
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
      description: `O TUDOS é um selo independente fundado por Vinícius Fernandes em 2014, focado na divulgação de obras experimentais que exploram as fronteiras entre música, arte sonora e tecnologia. O selo busca promover artistas que desafiam convenções sonoras, utilizando técnicas como síntese sonora, manipulação de áudio, instalações interativas e performances ao vivo. Com uma abordagem colaborativa, o TUDOS tem como objetivo criar uma plataforma para a experimentação sonora e a inovação artística, incentivando a troca de ideias e a expansão dos limites da criação musical contemporânea.
`,
      image: "/tudos_thumb.jpg",
      images_details: [
        "/tudos_detail_1.jpeg",
        "/tudos_detail_2.jpg",
        "/tudos_detail_3.jpg",
        "/tudos_detail_4.jpg",
        "/tudos_detail_5.jpg",
        "/tudos_detail_6.jpg",
        "/tudos_detail_7.jpg",
      ],
      embedsBandcamp: [
        `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1846535594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds013-muito-nasty">[tds013] Muito Nasty von Muito Nasty</a></iframe>`,
        `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=3315268750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds015-terror-da-terra">[tds015] Terror da terra von Gabriel Edé</a></iframe>`,
        `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=3896437244/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds05-the-mystical-sounds-of-historical-materialism">[tds05] The Mystical Sounds of Historical Materialism von Ajnabi</a></iframe>`,
      ],
      // novo: apenas URLs normais do YouTube (watch/playlist). A tela converte para embed.
      youtubeUrls: [
        "https://www.youtube.com/watch?v=d9j1gBxatnM",
        "https://www.youtube.com/watch?v=tmUvxuYCjfc",
        "https://www.youtube.com/watch?v=eoajLMbmk6w",
        "https://www.youtube.com/watch?v=YidEM9CXKeY",
      ],
      linkUrl: "https://tudos.bandcamp.com/",
      linkTitle: "Conheça todo o catálogo dos lançamentos clicando aqui",
    },
    {
      title: "9 chifres",
      text: "Peça eletrônica baseada na canção lituana Kalėdų rytu rožė inžydo, apresentada na 32ª Bienal de São Paulo.",
      description: `A obra "9 chifres" é uma peça eletrônica que se inspira na canção lituana Kalėdų rytu rožė inžydo. Apresentada na 32ª Bienal de São Paulo, a peça explora a relação entre música e tecnologia, utilizando recursos eletrônicos para criar uma experiência sonora imersiva e inovadora. Através da manipulação de sons e da incorporação de elementos culturais, "9 chifres" convida o público a refletir sobre as conexões entre tradição e modernidade na música contemporânea.
`,
      image: "/9chifres_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title: "Metempsicose",
      text: "Instalação sonora. Um rádio sintonizado em uma estação local aleatória controla dois alto-falantes modificados conectados a uma guitarra e a um tamtam.",
      description: `A instalação sonora "Metempsicose" explora a ideia de transformação e reencarnação através do som. Utilizando um rádio sintonizado em uma estação local aleatória, a obra cria uma conexão dinâmica entre o ambiente sonoro capturado e dois alto-falantes modificados, que são conectados a uma guitarra e a um tamtam. Essa interação gera uma paisagem sonora única e em constante evolução, convidando os espectadores a refletirem sobre os ciclos de vida, morte e renascimento presentes na natureza e na experiência humana.
`,
      image: "/metempsicose_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title: "¿Música?",
      text: "Série de performances/exposições de arte sonora/música experimental realizada desde 2005",
      description: `¿Música? é uma série de performances e exposições que exploram os limites entre arte sonora e música experimental. Iniciada em 2005, a série apresenta uma variedade de abordagens criativas, desde instalações interativas até composições sonoras inovadoras. Cada evento busca desafiar as percepções tradicionais de música, incentivando o público a experimentar o som de maneiras novas e inesperadas. Através de colaborações com outros artistas e a incorporação de tecnologias emergentes, ¿Música? continua a evoluir como uma plataforma para a experimentação sonora e a expressão artística.
`,
      image: "/musica_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title: "Móbile de vaca morta com vergalhões de ferro [...]",
      text: "Instalação com ossos, alto-falantes, vergalhões de ferro e com áudio de álbuns kitsch de Augusto Piccinini",
      description: `A instalação "Móbile de vaca morta com vergalhões de ferro" utiliza ossos, alto-falantes e vergalhões de ferro para criar uma experiência sonora única. Com áudio de álbuns kitsch de Augusto Piccinini, a obra explora a relação entre o orgânico e o industrial, convidando os espectadores a refletirem sobre a morte, a memória e a transformação dos materiais.
`,
      image: "/mobile_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title: "Fitosintetizador",
      text: "Instalação sonora interativa que utiliza plantas como controladoras de síntese sonora.",
      description: `O "Fitosintetizador" é uma instalação sonora interativa que explora a relação entre natureza e tecnologia. Utilizando plantas como controladoras de síntese sonora, a obra convida os espectadores a interagir com o ambiente de forma única, criando paisagens sonoras dinâmicas e orgânicas. Através de sensores e processamento de sinais, as plantas se tornam instrumentos musicais, desafiando as noções tradicionais de autoria e performance.
`,
      image: "/fitosintetizador_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title: "Echos of the deep",
      text: "Software de sonificação de dados metabólicos de esponjas marinhas. Apresentado no contexto 12th World Sponge Conference",
      description: `Echos of the deep é um software de sonificação de dados metabólicos de esponjas marinhas, apresentado no contexto da 12th World Sponge Conference. A obra explora as interações entre os organismos marinhos e seu ambiente, utilizando técnicas de sonificação para transformar dados científicos em experiências sonoras imersivas.
`,
      image: "/sponges_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title: "Discografia",
      text: "Reunião de todos discos, singles e colaborações",
      description: `A Discografia reúne todos os discos, singles e colaborações de Vinícius Fernandes, apresentando uma visão abrangente de sua trajetória musical e artística. Através de uma seleção cuidadosa de faixas e projetos, a discografia reflete a evolução do artista ao longo dos anos, destacando suas experimentações sonoras e colaborações com outros músicos e artistas.
`,
      image: "/discografia_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
  ];

  const techCards = [
    {
      title: "Menis",
      text: "Desenvolvimento de instrumentos eletrônicos, síntese embarcada e ferramentas para artistas e pesquisadores.",
      description: `Menis é uma iniciativa dedicada ao desenvolvimento de instrumentos eletrônicos, síntese embarcada e ferramentas para artistas e pesquisadores. Focada na criação de soluções inovadoras, a Menis busca facilitar a experimentação sonora e a exploração musical através de tecnologias acessíveis e personalizáveis. Com uma abordagem colaborativa, a Menis trabalha para capacitar músicos e criadores a expandirem suas práticas artísticas utilizando hardware e software de ponta.
`,
      image: "/menis_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title: "Granular Player - daisySP",
      text: "Contribuição para a DaisySP Library com um player granular otimizado para hardware Daisy.",
      description: `O "Granular Player" é uma contribuição para a DaisySP Library, oferecendo um player granular otimizado para hardware Daisy. Esta ferramenta permite a manipulação avançada de áudio através de técnicas de síntese granular, possibilitando aos usuários criar texturas sonoras complexas e dinâmicas em tempo real. Projetado para eficiência e desempenho, o Granular Player amplia as capacidades do hardware Daisy, tornando-o uma opção poderosa para músicos e desenvolvedores interessados em exploração sonora e design de som.
`,
      image: "/granular_thumb.jpg",
    },
    {
      title: "Grupo de Embarcados IME-USP",
      text: "Grupo de pesquisa e desenvolvimento em sistemas embarcados para música e áudio.",
      description: `O Grupo de Embarcados IME-USP é um coletivo de pesquisa e desenvolvimento focado em sistemas embarcados para música e áudio. Composto por estudantes, pesquisadores e profissionais da área, o grupo trabalha na criação de soluções inovadoras que combinam hardware e software para aplicações musicais. Suas atividades incluem o desenvolvimento de instrumentos eletrônicos, interfaces de controle, algoritmos de processamento de sinal e plataformas abertas, promovendo a experimentação sonora e a disseminação do conhecimento técnico na comunidade acadêmica e artística.
`,
      image: "/embarcados_thumb.jpg",
    },
  ];

  const softwareCards = [
    {
      title: "UOL",
      text: "Desenvolvimento de backend e frontend para o maior portal de notícias da América Latina.",
      description: `Atuei no desenvolvimento de soluções de backend e frontend para o UOL, o maior portal de notícias da América Latina. Minha experiência inclui a implementação de APIs, integração de sistemas e otimização de performance, sempre buscando oferecer a melhor experiência para os usuários.`,
      image: "/uol_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title: "Nexo Jornal",
      text: "Atualização de stack, integração de dados e desenvolvimento de novas funcionalidades para o portal de notícias.",
      description: `No Nexo Jornal, trabalhei na atualização da stack tecnológica, integração de dados e desenvolvimento de novas funcionalidades para o portal de notícias. Meu foco foi garantir a escalabilidade e a performance do sistema, além de implementar melhorias na experiência do usuário.`,
      image: "/nexo_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
  ];

  // nova coleção: Pesquisa & Publicações
  const publicationCards = [
    {
      title: "Cut-Up as Political Practice",
      text: "Artigo para a revista Norient analisando o cut-up de Burroughs como prática política contra manipulação midiática.",
      description: `O artigo explora as técnicas de cut-up de William Burroughs e sua aplicação como uma forma de resistência contra a manipulação midiática. Através da análise de obras específicas, discute-se como o cut-up pode ser visto como uma prática política que desafia narrativas dominantes e promove uma nova forma de expressão artística.`,
      image: "/cutup_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title:
        "A Emergência do Sujeito na Narrativa do Prelúdio Op. 28 no. 14 de Chopin",
      text: "Artigo publicado na revista Musica Theorica",
      description: `O artigo investiga a emergência do sujeito na narrativa do Prelúdio Op. 28 no. 14 de Chopin, analisando como elementos musicais e estruturais contribuem para a construção da subjetividade na obra. Através de uma abordagem interdisciplinar, busca-se compreender as implicações estéticas e filosóficas dessa narrativa musical.`,
      image: "/chopin_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
    {
      title:
        "The medium becomes infected by the message: Boris Groys' submedial suspicion as viral tropes in William Burroughs.",
      text: "Análise das cut-ups de Burroughs via Groys, apresentada e publicada nos proceedings da Sonologia 2019.",
      description: `O artigo analisa as cut-ups de William Burroughs à luz das ideias de Boris Groys, discutindo como as práticas artísticas contemporâneas podem ser entendidas através da noção de "suspensão submedial". A pesquisa foi apresentada e publicada nos proceedings da Sonologia 2019.`,
      image: "/sonologia_thumb.jpg",
      images_details: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
    },
  ];

  // expõe tudo para a página Detail
  (window as any).__APP_ALL__ = [
    ...cards,
    ...techCards,
    ...softwareCards,
    ...publicationCards,
  ];

  const params = useParams();

  // força scroll para o topo quando muda a rota (mover acima do early return)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const onRoute = () => {
      if (location.pathname.startsWith("/item/")) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant" as ScrollBehavior,
        });
      }
    };
    onRoute();
    window.addEventListener("popstate", onRoute);
    return () => window.removeEventListener("popstate", onRoute);
  }, []);

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

  // quando abrir item via clique (pushState), também subir
  const openItem = (it: any) => {
    const slug = (it.slug as string) || slugify(it.title || "");
    const url = `/item/${slug}`;
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
    // garante topo em navegação programática
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
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
            cius Fernandes é desenvolvedor, pesquisador, músico e artista
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
