import { useEffect } from "react";
import { useParams } from "./lib/routerShim";
import "./App.css";
import Carousel from "./components/Carousel";
import Highlights from "./components/Highlights";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import { useTranslation } from "./hooks/useTranslation";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function App() {
  const { t } = useTranslation();

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
      description: `"9 antlers" is a piece for guitar and electronics. All of its sound material is motivated by the traditional Lithuanian song Kalėdų rytu rožė inžydo, in which the appearance of a 9-horned deer triggers a flow of images of cosmological updates. Its prime melodic universe is distended in electronic sound textures produced by various techniques of computational synthesis and processing. Inspired by the experiences of the so-called 'verbal composition' in electroacoustic music, such as Karlheinz Stockhausen's Gesang der Jünglinge (1955-1956) or Luciano Berio's Thema (Omaggio a Joyce) (1958), part of '9 horns' is also composed of sounds derived from a female voice singing the song.The piece will be played in a sound system installed in 9 objects created along the #32bienal with mycelia of the fungus Pleurotus ostreatus, part of the work Psychotropic House: Zooetics Pavilion of Ballardian Technologies by Nomeda & Gediminas Urbonas.
`,
      image: "/9_chifres_thumb.JPG",
      images_details: [
        "/9_chifres_1.JPG",
        "/9_chifres_2.JPG",
        "/9_chifres_3.jpg",
        "/9_chifres_4.JPG",
        "/9_chifres_5.JPG",
        "/9_chifres_6.jpg",
        "/9_chifres_7.jpg",
      ],
    },
    {
      title: "Metempsicose",
      text: "Instalação sonora. Um rádio sintonizado em uma estação local aleatória controla dois alto-falantes modificados conectados a uma guitarra e a um tamtam.",
      description: `A instalação sonora "Metempsicose" explora a ideia de transformação e reencarnação através do som. Utilizando um rádio sintonizado em uma estação local aleatória, a obra cria uma conexão dinâmica entre o ambiente sonoro capturado e dois alto-falantes modificados, que são conectados a uma guitarra e a um tamtam. Essa interação gera uma paisagem sonora única e em constante evolução, convidando os espectadores a refletirem sobre os ciclos de vida, morte e renascimento presentes na natureza e na experiência humana.
`,
      image: "/metempsicose_thumb.jpg",
      images_details: [
        "/metempsicose_1.jpg",
        "/metempsicose_2.jpg",
        "/metempsicose_3.jpg",
        "/metempsicose_4.jpg",
        "/metempsicose_5.jpg",
        "/metempsicose_6.jpg",
      ],
      embedsBandcamp: [
        `<iframe style="border: 0; width: 350px; height: 442px;" src="https://bandcamp.com/EmbeddedPlayer/track=2447535245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://viniciusfernandesssss.bandcamp.com/track/metempsicose">Metempsicose von Vinícius Fernandes</a></iframe>`,
      ],
    },
    {
      title: "¿Música?",
      text: "Série de performances/exposições de arte sonora/música experimental realizada desde 2005",
      description: `¿Música? é uma série de performances e exposições que exploram os limites entre arte sonora e música experimental. Iniciada em 2005, a série apresenta uma variedade de abordagens criativas, desde instalações interativas até composições sonoras inovadoras. Cada evento busca desafiar as percepções tradicionais de música, incentivando o público a experimentar o som de maneiras novas e inesperadas. Através de colaborações com outros artistas e a incorporação de tecnologias emergentes, ¿Música? continua a evoluir como uma plataforma para a experimentação sonora e a expressão artística.
`,
      image: "/musica_thumb.jpg",
      images_details: [
        "/musica_1.JPG",
        "/musica_2.jpg",
        "/musica_3.jpg",
        "/musica_4.jpg",
        "/musica_5.jpg",
        "/musica_6.jpg",
      ],
    },
    {
      title: "Móbile de vaca morta com vergalhões de ferro [...]",
      text: "Instalação com ossos, alto-falantes, vergalhões de ferro e com áudio de álbuns kitsch de Augusto Piccinini",
      description: `Six loudspeakers are installed directly on cow bones, in positions suggested plastically by the animal's own bone structure. The sound system plays simultaneously, in subtle volume, Augusto Piccinini’s albums “Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas”, “Igual ao album anterior mas desta vez mais radical e mais profundo”, “Just like the last two albums but this time in english in order to appeal to international audiences”. The installation performs a kind of teratogenic resuscitation by reconstituting an animal-building from biological and architectural waste. Precarious and dying structure that forms an ironic oxymoron with the sound material, constituted by the semiotic saturation of the kitsch universe of a literature and musical production obsessed with the obliteration of the fundamental existential anguish of human experience.
`,
      image: "/mobile_thumb.jpg",
      images_details: [
        "/mobile_1.jpg",
        "/mobile_2.jpg",
        "/mobile_3.jpg",
        "/mobile_4.jpg",
      ],
      embedsBandcamp: [
        `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=743014755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://3edgy5u.bandcamp.com/album/v-rios-midis-maneiros-com-timbres-mais-maneiros-ainda-intercalados-com-frases-de-auto-ajuda-narradas-por-vozes-sintetizadas">Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas von 3edgy5u</a></iframe>`,
      ],
    },

    {
      title: "Fitosintetizador",
      text: "Instalação sonora interativa que utiliza plantas como controladoras de síntese sonora.",
      description: `O "Fitosintetizador" é uma instalação sonora interativa que explora a relação entre natureza e tecnologia. Utilizando plantas como controladoras de síntese sonora, a obra convida os espectadores a interagir com o ambiente de forma única, criando paisagens sonoras dinâmicas e orgânicas. Através de sensores e processamento de sinais, as plantas se tornam instrumentos musicais, desafiando as noções tradicionais de autoria e performance.
`,
      image: "/fitosintetizador_thumb.jpg",
      images_details: [
        "/fitosintetizador_1.jpg",
        "/fitosintetizador_2.jpg",
        "/fitosintetizador_3.jpg",
        "/fitosintetizador_4.jpg",
        "/fitosintetizador_5.jpg",
        "/fitosintetizador_6.jpg",
        "/fitosintetizador_7.jpg",
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
      embedsBandcamp: [
        `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=965401561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds01-amador">[tds01] amador von Tabutril</a></iframe>`,
        `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=2229382614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds09-fontanela">[tds09] Fontanela von Cassini</a></iframe>`,
        `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1846535594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds013-muito-nasty">[tds013] Muito Nasty von Muito Nasty</a></iframe>`,
        `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=981793339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://passaro-concreto.bandcamp.com/album/p-ssaro-concreto">Pássaro-Concreto von Pássaro-Concreto</a></iframe>`,
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

  const cardsWithSlug = cards.map((item) => ({
    ...item,
    slug: slugify(item.title),
  }));

  const techCardsWithSlug = techCards.map((item) => ({
    ...item,
    slug: slugify(item.title),
  }));

  const softwareCardsWithSlug = softwareCards.map((item) => ({
    ...item,
    slug: slugify(item.title),
  }));

  const publicationCardsWithSlug = publicationCards.map((item) => ({
    ...item,
    slug: slugify(item.title),
  }));

  const localizedCards = cardsWithSlug.map((item, index) => ({
    ...item,
    titleKey: `home.cards.art.${index}.title`,
    textKey: `home.cards.art.${index}.text`,
  }));

  const localizedTechCards = techCardsWithSlug.map((item, index) => ({
    ...item,
    titleKey: `home.cards.tech.${index}.title`,
    textKey: `home.cards.tech.${index}.text`,
  }));

  const localizedSoftwareCards = softwareCardsWithSlug.map((item, index) => ({
    ...item,
    titleKey: `home.cards.software.${index}.title`,
    textKey: `home.cards.software.${index}.text`,
  }));

  const localizedPublicationCards = publicationCardsWithSlug.map((item, index) => ({
    ...item,
    titleKey: `home.cards.publications.${index}.title`,
    textKey: `home.cards.publications.${index}.text`,
  }));

  // expõe tudo para a página Detail
  (window as any).__APP_ALL__ = [
    ...cardsWithSlug,
    ...techCardsWithSlug,
    ...softwareCardsWithSlug,
    ...publicationCardsWithSlug,
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
            © {new Date().getFullYear()} Vinícius Fernandes — {t("home.footer")}
          </p>
        </footer>
      </div>
    );
  }

  // quando abrir item via clique (pushState), também subir
  const openItem = (it: any) => {
    const slug = (it.slug as string) || slugify(String(it.title || ""));
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
              {t("hero.title")}
              <br />
            </h1>
            <p>
              {t("hero.subtitle")}
            </p>
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
          <h2>{t("section.about.title")}</h2>
          <p>{t("section.about.p1")}</p>
        </section>

        {/* ART */}
        <section id="art" className="section section--inverted">
          <h2>{t("home.section.art.title")}</h2>
          <p>{t("home.section.art.subtitle")}</p>

          <Carousel
            items={localizedCards}
            slidesToShow={3}
            autoplay={true}
            onItemClick={openItem}
          />
        </section>

        {/* TECH */}
        <section id="tech" className="section">
          <h2>{t("home.section.tech.title")}</h2>
          <p>{t("home.section.tech.subtitle")}</p>
          <Carousel
            items={localizedTechCards}
            slidesToShow={3}
            autoplay={true}
            onItemClick={openItem}
          />
        </section>

        {/* RESEARCH & PUBLICATIONS (nova seção) */}
        <section id="publications" className="section section--inverted">
          <h2>{t("home.section.publications.title")}</h2>
          <p>{t("home.section.publications.subtitle")}</p>

          <Carousel
            items={localizedPublicationCards}
            slidesToShow={3}
            autoplay={false}
            onItemClick={openItem}
          />
        </section>

        {/* SOFTWARE */}
        <section id="software" className="section">
          <h2>{t("home.section.software.title")}</h2>
          <p>{t("home.section.software.subtitle")}</p>
          <Carousel
            items={localizedSoftwareCards}
            slidesToShow={2}
            autoplay={true}
            onItemClick={openItem}
          />
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section--inverted">
          <h2>{t("contact.title")}</h2>
          <p>{t("home.section.contact.subtitle")}</p>
          <ul className="contact-links" aria-label={t("home.contact.linksAria")}> 
            <li>
              <a
                href="https://www.instagram.com/viniciustabu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("home.contact.instagram")}
                title={t("home.contact.instagram")}
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="mailto:viniciusfersil@gmail.com"
                aria-label={t("contact.email")}
                title={t("contact.email")}
              >
                <MdEmail />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/viniciusfersil123/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("home.contact.github")}
                title={t("home.contact.github")}
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/viniciusfersil/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("home.contact.linkedin")}
                title={t("home.contact.linkedin")}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/viniciusfersil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("home.contact.telegram")}
                title={t("home.contact.telegram")}
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511971963771"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("home.contact.whatsapp")}
                title={t("home.contact.whatsapp")}
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </section>
      </main>

      {/* Detail overlay / page (shown when URL contains /item/:slug) */}
      {params.slug && <Detail />}

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Vinícius Fernandes — {t("home.footer")}
        </p>
      </footer>
    </div>
  );
}

export default App;
