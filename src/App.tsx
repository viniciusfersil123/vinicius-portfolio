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

type ImageDetailInput = {
  src: string;
  title: string;
  caption: string;
  caption_i18n?: Record<string, string>;
  x?: string;
  y?: string;
  x900?: string;
  y900?: string;
  x600?: string;
  y600?: string;
};

function buildImageDetails(details: ImageDetailInput[]) {
  return details.map(
    ({ src, title, caption, caption_i18n, x, y, x900, y900, x600, y600 }) => {
      const isPlaceholder = src.includes("placeholder.jpg");

      return {
        src,
        title,
        caption,
        caption_i18n,
        imageOffsetX: x ?? (isPlaceholder ? "0px" : undefined),
        imageOffsetY: y ?? (isPlaceholder ? "0px" : undefined),
        imageOffsetX900: x900 ?? (isPlaceholder ? "0px" : undefined),
        imageOffsetY900: y900 ?? (isPlaceholder ? "0px" : undefined),
        imageOffsetX600: x600 ?? (isPlaceholder ? "0px" : undefined),
        imageOffsetY600: y600 ?? (isPlaceholder ? "0px" : undefined),
      };
    },
  );
}

function App() {
  const { t, lang } = useTranslation();

  // dados dos cards (fácil de manter e reutilizar)
  const cards = [
    {
      title: "TUDOS",
      text: `Selo dedicado ao lançamento de artistas que trabalham com composição experimental.
`,
      description: `TUDOS é um selo e produtora co-fundada por Vinícius Fernandes em 2014 voltada ao lançamento de artistas que trabalham com composição experimental. Além disso, o projeto também abrange iniciativas em diferentes vertentes da música experimental, como improvisação livre, música eletrônica, música conceitual e plunderphonics, entre outras.
TUDOS já lançou 17 álbuns e produziu mais de 30 eventos com seus artistas em mais de 7 países. Em 2015, o projeto recebeu apoio financeiro por meio de um edital da Universidade Estadual de Campinas (UNICAMP)`,
      image: "/tudos_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/tudos_detail_1.jpeg",
          title: "Lucas Rodrigues (Tantão à direita) - TUDOS Mini RJ Tour",
          caption: "Boca, Rio de Janeiro - RJ, Brasil - 2019",
          x: "18%",
          y: "-100%",
          x900: "18%",
          y900: "-100%",
          x600: "30%",
          y600: "-100%",
        },
        {
          src: "/tudos_detail_2.jpg",
          title: "Bin Beri Ban",
          caption:
            "TUDOS na UNICAMP #3 - II encontro de estudos do canto e da canção popular, Campinas- SP, Brasil - 2015",
          x: "0px",
          y: "-40%",
          x900: "0px",
          y900: "-50%",
          x600: "0px",
          y600: "-50%",
        },
        {
          src: "/tudos_detail_3.jpg",
          title: "AVC LTDA",
          caption: "TUDOS na UNICAMP #7, Campinas - SP, Brasil - 2015",
          x: "0px",
          y: "-45%",
          x900: "0px",
          y900: "-50%",
          x600: "50%",
          y600: "-50%",
        },
        {
          src: "/tudos_detail_4.jpg",
          title: "Maurício Takara",
          caption: "TUDOS #12 - Bar do Zé, Campinas - SP, Brasil - 2015",
          x: "0px",
          y: "-70%",
          x900: "0px",
          y900: "-40%",
          x600: "50%",
          y600: "-40%",
        },
        {
          src: "/tudos_detail_5.jpg",
          title: "Minivan",
          caption: "TUDOS na FAUHAUS #2, São Paulo - SP, Brasil - 2019",
          x: "0px",
          y: "-90%",
          x900: "0px",
          y900: "-50%",
          x600: "-5%",
          y600: "-50%",
        },
        {
          src: "/tudos_detail_6.jpg",
          title: "TUDOS — detalhe 6",
          caption: "Detalhe complementar de documentação do projeto TUDOS.",
        },
        {
          src: "/tudos_detail_7.jpg",
          title: "TUDOS — detalhe 7",
          caption: "Imagem final da série de registros do selo TUDOS.",
        },
      ]),
      embedsBandcamp: [
        {
          html: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1846535594/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds013-muito-nasty">[tds013] Muito Nasty von Muito Nasty</a></iframe>`,
          caption: "2019 - Muito Nasty - Muito Nasty",
          caption_i18n: {
            "pt-br": "2019 - Muito Nasty - Muito Nasty",
            en: "2019 - Muito Nasty - Muito Nasty",
            de: "2019 - Muito Nasty - Muito Nasty",
          },
        },
        {
          html: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=3315268750/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds015-terror-da-terra">[tds015] Terror da terra von Gabriel Edé</a></iframe>`,
          caption: "2020 - Terror da Terra - Gabriel Edé",
          caption_i18n: {
            "pt-br": "2020 - Terror da Terra - Gabriel Edé",
            en: "2020 - Terror da Terra - Gabriel Edé",
            de: "2020 - Terror da Terra - Gabriel Edé",
          },
        },
        {
          html: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=3896437244/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds05-the-mystical-sounds-of-historical-materialism">[tds05] The Mystical Sounds of Historical Materialism von Ajnabi</a></iframe>`,
          caption: "2016 - The Mystical Sounds of Historical Materialism - Ajnabi",
          caption_i18n: {
            "pt-br": "2016 - The Mystical Sounds of Historical Materialism - Ajnabi",
            en: "2016 - The Mystical Sounds of Historical Materialism - Ajnabi",
            de: "2016 - The Mystical Sounds of Historical Materialism - Ajnabi",
          },
        },
        {
          html: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1951198024/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds04-o-maior-brasileiro-de-todos-os-tempos">[tds04] O Maior Brasileiro de Todos os Tempos von As Colegas de Trabalho</a></iframe>`,
          caption: "2015 - O Maior Brasileiro de Todos os Tempos - As Colegas de Trabalho",
          caption_i18n: {
            "pt-br": "2015 - O Maior Brasileiro de Todos os Tempos - As Colegas de Trabalho",
            en: "2015 - O Maior Brasileiro de Todos os Tempos - As Colegas de Trabalho",
            de: "2015 - O Maior Brasileiro de Todos os Tempos - As Colegas de Trabalho",
          },
        },
      ],
      // novo: apenas URLs normais do YouTube (watch/playlist). A tela converte para embed.
      youtubeUrls: [
        "https://www.youtube.com/watch?v=d9j1gBxatnM",
        "https://www.youtube.com/watch?v=tmUvxuYCjfc",
        "https://www.youtube.com/watch?v=eoajLMbmk6w",
        "https://www.youtube.com/watch?v=YidEM9CXKeY",
      ],
      youtubeCaption: [
        "TUDOS #4 - Bin Beri Ban - Campinas, SP, Brasil - 2014",
        "TUDOS #3 - Gustavo Torres - Campinas, SP, Brasil - 2014",
        "TUDOS #2 - Para Leila Khaled - Campinas, SP, Brasil - 2014",
        "TUDOS na UNICAMP #2 - Tabutril - Campinas, SP, Brasil - 2015",
      ],
      youtubeCaption_i18n: {
        "pt-br": [
          "TUDOS #4 - Bin Beri Ban - Campinas, SP, Brasil - 2014",
          "TUDOS #3 - Gustavo Torres - Campinas, SP, Brasil - 2014",
          "TUDOS #2 - Para Leila Khaled - Campinas, SP, Brasil - 2014",
          "TUDOS na UNICAMP #2 - Tabutril - Campinas, SP, Brasil - 2015",
        ],
        en: [
          "TUDOS #4 - Bin Beri Ban - Campinas, SP, Brazil - 2014",
          "TUDOS #3 - Gustavo Torres - Campinas, SP, Brazil - 2014",
          "TUDOS #2 - Para Leila Khaled - Campinas, SP, Brazil - 2014",
          "TUDOS at UNICAMP #2 - Tabutril - Campinas, SP, Brazil - 2015",
        ],
        de: [
          "TUDOS #4 - Bin Beri Ban - Campinas, SP, Brasilien - 2014",
          "TUDOS #3 - Gustavo Torres - Campinas, SP, Brasilien - 2014",
          "TUDOS #2 - Para Leila Khaled - Campinas, SP, Brasilien - 2014",
          "TUDOS na UNICAMP #2 - Tabutril - Campinas, SP, Brasilien - 2015",
        ],
      },
      linkUrl: "https://tudos.bandcamp.com/",
      linkTitle: "Ouça todo o catálogo clicando aqui",
      linkTitle_i18n: {
        "pt-br": "Ouça todo o catálogo clicando aqui",
        en: "Listen to the full catalog by clicking here",
        de: "Hören Sie den gesamten Katalog, indem Sie hier klicken",
      },
    },
    {
      title: "9 chifres",
      text: "Peça eletrônica baseada na canção lituana Kalėdų rytu rožė inžydo, apresentada na 32ª Bienal de São Paulo.",
      description: `"9 chifres" é uma peça para guitarra e eletrônica, apresentada em performance no dia 11 de dezembro de 2016 (16h–17h), no Pavilhão da Bienal, Psychotropic House (1º andar), durante a 32ª Bienal de São Paulo. Todo o material sonoro parte da canção tradicional lituana Kalėdų rytu rožė inžydo, em que a aparição de um cervo de nove chifres desencadeia imagens de atualização cosmológica. O universo melódico da canção é expandido em texturas eletrônicas geradas por diferentes técnicas de síntese e processamento computacional. Inspirada em experiências de "composição verbal" da música eletroacústica — como Gesang der Jünglinge (1955–1956), de Karlheinz Stockhausen, e Thema (Omaggio a Joyce) (1958), de Luciano Berio — a obra também utiliza sons derivados da voz feminina que canta a canção. A peça foi difundida em um sistema sonoro instalado em 9 objetos com micélio do fungo Pleurotus ostreatus, integrando o trabalho Psychotropic House: Zooetics Pavilion of Ballardian Technologies, de Nomeda & Gediminas Urbonas.
    `,
      description_i18n: {
        "pt-br": `"9 chifres" é uma peça para guitarra e eletrônica, apresentada em performance no dia 11 de dezembro de 2016 (16h–17h), no Pavilhão da Bienal, Psychotropic House (1º andar), durante a 32ª Bienal de São Paulo. Todo o material sonoro parte da canção tradicional lituana Kalėdų rytu rožė inžydo, em que a aparição de um cervo de nove chifres desencadeia imagens de atualização cosmológica. O universo melódico da canção é expandido em texturas eletrônicas geradas por diferentes técnicas de síntese e processamento computacional. Inspirada em experiências de "composição verbal" da música eletroacústica — como Gesang der Jünglinge (1955–1956), de Karlheinz Stockhausen, e Thema (Omaggio a Joyce) (1958), de Luciano Berio — a obra também utiliza sons derivados da voz feminina que canta a canção. A peça foi difundida em um sistema sonoro instalado em 9 objetos com micélio do fungo Pleurotus ostreatus, integrando o trabalho Psychotropic House: Zooetics Pavilion of Ballardian Technologies, de Nomeda & Gediminas Urbonas.
        `,
        en: `"9 chifres" is a piece for guitar and electronics, performed on December 11, 2016 (4–5pm) at the Bienal Pavilion, Psychotropic House (1st floor), during the 32nd São Paulo Biennial. All sonic material stems from the traditional Lithuanian song Kalėdų rytu rožė inžydo, in which the appearance of a nine‑antlered deer triggers images of cosmological renewal. The song's melodic universe is expanded into electronic textures generated by different techniques of synthesis and computational processing. Inspired by 'verbal composition' experiments of electroacoustic music — such as Karlheinz Stockhausen's Gesang der Jünglinge (1955–1956) and Luciano Berio's Thema (Omaggio a Joyce) (1958) — the work also uses sounds derived from the female voice that sings the song. The piece was presented through a sound system installed in nine objects with mycelium of the fungus Pleurotus ostreatus, integrating the Psychotropic House: Zooetics Pavilion of Ballardian Technologies by Nomeda & Gediminas Urbonas.
        `,
        de: `"9 chifres" ist ein Stück für Gitarre und Elektronik, aufgeführt am 11. Dezember 2016 (16–17 Uhr) im Pavillon der Biennale, Psychotropic House (1. Stock), während der 32. Biennale von São Paulo. Das gesamte Klangmaterial basiert auf dem traditionellen litauischen Lied Kalėdų rytu rožė inžydo, in dem das Erscheinen eines neungehörnten Hirsches Bilder kosmologischer Erneuerung auslöst. Das melodische Universum des Liedes wird in elektronische Texturen erweitert, die durch verschiedene Techniken der Synthese und computergestützten Verarbeitung erzeugt werden. Inspiriert von Experimenten der 'verbalen Komposition' in der elektroakustischen Musik — wie Karlheinz Stockhausens Gesang der Jünglinge (1955–1956) und Luciano Berios Thema (Omaggio a Joyce) (1958) — verwendet das Werk auch Klänge, die von der weiblichen Stimme abgeleitet sind, die das Lied singt. Das Stück wurde auf einem Klangsystem präsentiert, das in neun Objekten mit Myzel des Pilzes Pleurotus ostreatus installiert war und in das Werk Psychotropic House: Zooetics Pavilion of Ballardian Technologies von Nomeda & Gediminas Urbonas integriert ist.
        `,
      },
      image: "/9_chifres_thumb.JPG",
      linkUrl: "http://www.32bienal.org.br/en/event/o/3308/",
      linkTitle: "Saiba mais",
      images_details: buildImageDetails([
        {
          src: "/9_chifres_1.JPG",
          title: "9 chifres",
          caption:
            "Registro da performance 9 chifres na 32ª Bienal de São Paulo, São Paulo, Brasil, 2016",
          x: "8%",
          y: "-25%",
        },
        {
          src: "/9_chifres_2.JPG",
          title: "9 chifres",
          caption:
            "Registro da performance 9 chifres na 32ª Bienal de São Paulo, São Paulo, Brasil, 2016",
          x: "0px",
          y: "-80%",
          x600: "-25%",
          y600: "-42%",
        },
        {
          src: "/9_chifres_3.jpg",
          title: "9 chifres",
          caption:
            "Registro da performance 9 chifres na 32ª Bienal de São Paulo, São Paulo, Brasil, 2016",
          x: "12%",
          y: "-55%",
        },
        {
          src: "/9_chifres_4.JPG",
          title: "9 chifres",
          caption:
            "Registro da performance 9 chifres na 32ª Bienal de São Paulo, São Paulo, Brasil, 2016",
          x: "-6%",
          y: "-50%",
          x900: "-4%",
          y900: "-46%",
          x600: "0px",
          y600: "-40%",
        },
        {
          src: "/9_chifres_5.JPG",
          title: "9 chifres",
          caption:
            "Registro da performance 9 chifres na 32ª Bienal de São Paulo, São Paulo, Brasil, 2016",
          x: "10%",
          y: "-70%",
          x900: "6%",
          y900: "-62%",
          x600: "0px",
          y600: "-52%",
        },
        {
          src: "/9_chifres_6.jpg",
          title: "9 chifres",
          caption:
            "Registro da performance 9 chifres na 32ª Bienal de São Paulo, São Paulo, Brasil, 2016",
          x: "0px",
          y: "-55%",
          x900: "0px",
          y900: "-50%",
          x600: "0px",
          y600: "-44%",
        },
        {
          src: "/9_chifres_7.jpg",
          title: "9 chifres",
          caption:
            "Registro da performance 9 chifres na 32ª Bienal de São Paulo, São Paulo, Brasil, 2016",
          x: "14%",
          y: "-60%",
          x900: "10%",
          y900: "-56%",
          x600: "4%",
          y600: "-48%",
        },
      ]),
    },
    {
      title: "Metempsicose",
      text: "Instalação sonora. Um rádio sintonizado em uma estação local aleatória controla dois alto-falantes modificados conectados a uma guitarra e a um tamtam.",
      description: `A instalação sonora “Metempsicose” investiga processos de transformação sonora a partir da circulação e da retransmissão de sinais de áudio. A obra utiliza um rádio sintonizado em uma estação local aleatória como fonte de material sonoro, que é reproduzido por dois alto-falantes modificados acoplados a uma guitarra e a um tamtam.

    A vibração mecânica desses objetos altera o comportamento do som transmitido, produzindo variações tímbricas, ressonâncias e interferências determinadas pelas propriedades físicas dos materiais e pelas condições do ambiente. Em vez de representar simbolicamente ideias de transcendência, a obra enfatiza a transformação concreta da matéria sonora através de processos eletromecânicos e acústicos.
    `,
      description_i18n: {
        "pt-br": `A instalação sonora “Metempsicose” investiga processos de transformação sonora a partir da circulação e da retransmissão de sinais de áudio. A obra utiliza um rádio sintonizado em uma estação local aleatória como fonte de material sonoro, que é reproduzido por dois alto-falantes modificados acoplados a uma guitarra e a um tamtam.

A vibração mecânica desses objetos altera o comportamento do som transmitido, produzindo variações tímbricas, ressonâncias e interferências determinadas pelas propriedades físicas dos materiais e pelas condições do ambiente. Em vez de representar simbolicamente ideias de transcendência, a obra enfatiza a transformação concreta da matéria sonora através de processos eletromecânicos e acústicos.
        `,
        en: `The sound installation “Metempsicose” investigates processes of sonic transformation arising from the circulation and retransmission of audio signals. The work uses a radio tuned to a random local station as a source of sonic material, which is reproduced through two modified loudspeakers coupled to a guitar and a tamtam.

The mechanical vibration of these objects alters the behavior of the transmitted sound, producing timbral variations, resonances and interferences determined by the physical properties of the materials and the environmental conditions. Rather than symbolically representing ideas of transcendence, the work emphasises the concrete transformation of sonic matter through electromechanical and acoustic processes.
        `,
        de: `Die Klanginstallation „Metempsicose" untersucht Prozesse klanglicher Transformation, die sich aus der Zirkulation und der erneuten Übertragung von Audiosignalen ergeben. Das Werk verwendet ein auf einen zufälligen lokalen Sender eingestelltes Radio als Quelle des Klangmaterials, das über zwei modifizierte Lautsprecher wiedergegeben wird, die mit einer Gitarre und einem Tam‑Tam gekoppelt sind.

Die mechanische Vibration dieser Objekte verändert das Verhalten des übertragenen Klangs und erzeugt klangliche Variationen, Resonanzen und Interferenzen, die durch die physikalischen Eigenschaften der Materialien und die Bedingungen der Umgebung bestimmt werden. Anstatt symbolisch Vorstellungen von Transzendenz darzustellen, betont das Werk die konkrete Transformation klanglicher Materie durch elektromechanische und akustische Prozesse.
        `,
      },
      image: "/metempsicose_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/metempsicose_1.jpg",
          title: "Metempsicose",
          caption:
            "Instalação sonora com rádio, alto-falantes e instrumentos modificados.",
          caption_i18n: {
            "pt-br": "Instalação sonora com rádio, alto-falantes e instrumentos modificados.",
            en: "Sound installation with radio, loudspeakers and modified instruments.",
            de: "Klanginstallation mit Radio, Lautsprechern und modifizierten Instrumenten.",
          },
          x: "0px",
          y: "-75%",
        },
        {
          src: "/metempsicose_2.jpg",
          title: "Metempsicose — imagem 2",
          caption: "Detalhe do arranjo dos componentes eletroacústicos.",
          caption_i18n: {
            "pt-br": "Detalhe do arranjo dos componentes eletroacústicos.",
            en: "Detail of the arrangement of electroacoustic components.",
            de: "Detail der Anordnung elektroakustischer Komponenten.",
          },
          y: "-30%",
        },
        {
          src: "/metempsicose_3.jpg",
          title: "Metempsicose — imagem 3",
          caption: "Outro registro da montagem e da espacialização do som.",
          caption_i18n: {
            "pt-br": "Outro registro da montagem e da espacialização do som.",
            en: "Another record of the setup and spatialization of the sound.",
            de: "Weitere Dokumentation des Aufbaus und der Räumlichkeitsgestaltung des Klangs.",
          },
          y: "-30%",
        },
        {
          src: "/metempsicose_4.jpg",
          title: "Metempsicose — imagem 4",
          caption: "Vista da obra em interação com o ambiente expositivo.",
          caption_i18n: {
            "pt-br": "Vista da obra em interação com o ambiente expositivo.",
            en: "View of the work interacting with the exhibition environment.",
            de: "Ansicht des Werks in Interaktion mit der Ausstellungsumgebung.",
          },
          y: "-65%",
        },
        {
          src: "/metempsicose_5.jpg",
          title: "Metempsicose — imagem 5",
          caption:
            "Detalhe dos alto-falantes modificados ligados à guitarra e ao tamtam.",
          caption_i18n: {
            "pt-br": "Detalhe dos alto-falantes modificados ligados à guitarra e ao tamtam.",
            en: "Detail of the modified loudspeakers connected to the guitar and tamtam.",
            de: "Detail der modifizierten Lautsprecher, die mit Gitarre und Tam‑Tam verbunden sind.",
          },
          y: "-50%",
        },
      ]),
      embedsBandcamp: [
        {
          html: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/track=2447535245/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://viniciusfernandesssss.bandcamp.com/track/metempsicose">Metempsicose von Vinícius Fernandes</a></iframe>`,
          caption: "2016 - Metempsicose - Vinícius Fernandes - Registro em áudio",
          caption_i18n: {
            "pt-br": "2016 - Metempsicose - Vinícius Fernandes - Registro em áudio",
            en: "2016 - Metempsicose - Vinícius Fernandes - Audio recording",
            de: "2016 - Metempsicose - Vinícius Fernandes - Audioaufzeichnung",
          },
        },
      ],
    },
    {
      title: "¿Música?",
      text: "Série de performances/exposições de arte sonora/música experimental realizada desde 2005",
      description: `¿Música? é uma série de performances realizada desde 2005 que toma produções sonoras e musicais como ponto de discussão e reflexão sobre a produção musical contemporânea. O evento reúne trabalhos ligados ao experimentalismo, ao uso crítico de tecnologias de produção sonora, à integração entre elementos visuais, gestuais e sonoros, ao emprego de técnicas de improvisação e à exploração dos espaços de performance. Vinícius Fernandes atuou como curador da 12ª e 13ª edições da série.`,
      description_i18n: {
        "pt-br": `¿Música? é uma série de performances realizada desde 2005 que toma produções sonoras e musicais como ponto de discussão e reflexão sobre a produção musical contemporânea. O evento reúne trabalhos ligados ao experimentalismo, ao uso crítico de tecnologias de produção sonora, à integração entre elementos visuais, gestuais e sonoros, ao emprego de técnicas de improvisação e à exploração dos espaços de performance. Vinícius Fernandes atuou como curador da 12ª e 13ª edições da série.`,
        en: `¿Música? is a series of performances held since 2005 that takes sound and musical productions as a point of discussion and reflection on contemporary music production. The event gathers works related to experimentalism, the critical use of sound production technologies, the integration of visual, gestural and sonic elements, the use of improvisation techniques and the exploration of performance spaces. Vinícius Fernandes curated the 12th and 13th editions of the series.`,
        de: `¿Música? ist eine Reihe von Performances, die seit 2005 stattfindet und Klang- und Musikproduktionen als Anlass für Diskussionen und Reflexionen über zeitgenössische Musikproduktion nimmt. Die Veranstaltung versammelt Arbeiten, die mit Experimentalismus, dem kritischen Einsatz von Klangproduktionstechnologien, der Integration visueller, gestischer und klanglicher Elemente, dem Einsatz von Improvisationstechniken und der Erforschung von Aufführungsräumen verbunden sind. Vinícius Fernandes war Kurator der 12. und 13. Ausgabe der Reihe.`,
      },
      image: "/musica_thumb.jpg",
      imageOffsetX: "50%",
      imageOffsetY: "40%",
      images_details: buildImageDetails([
        {
          src: "/musica_1.JPG",
          title: "Mariana Carvalho",
          caption: "Perfomance em ¿Música? #12, São Paulo - SP, Brasil - 2017",
          caption_i18n: {
            "pt-br": "Perfomance em ¿Música? #12, São Paulo - SP, Brasil - 2017",
            en: "Performance at ¿Música? #12, São Paulo - SP, Brazil - 2017",
            de: "Performance auf ¿Música? #12, São Paulo - SP, Brasilien - 2017",
          },
          y: "-84%",
          x600: "50%",
        },
        {
          src: "/musica_2.jpg",
          title: "Luís Fernando Cirne, Gustavo Branco e Paulo Assis",
          caption:
            "Planos de Saturação — performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
          caption_i18n: {
            "pt-br": "Planos de Saturação — performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
            en: "Planos de Saturação — performance at ¿Música? #13, São Paulo - SP, Brazil - 2017",
            de: "Planos de Saturação — Performance auf ¿Música? #13, São Paulo - SP, Brasilien - 2017",
          },
          y: "-54%",
          y900: "-80%",
          x600: "-15%",
        },
        {
          src: "/musica_3.jpg",
          title: "Denis Abranches e Alessandra Bono Vox",
          caption:
            "Duo Movente — performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
          caption_i18n: {
            "pt-br": "Duo Movente — performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
            en: "Duo Movente — performance at ¿Música? #13, São Paulo - SP, Brazil - 2017",
            de: "Duo Movente — Performance auf ¿Música? #13, São Paulo - SP, Brasilien - 2017",
          },
          y: "-75%",
          x600: "-30%",
        },
        {
          src: "/musica_4.jpg",
          title: "¿Música? 13",
          caption:
            "Público durante a 13ª edição da série ¿Música?, São Paulo - SP, Brasil - 2017",
          caption_i18n: {
            "pt-br": "Público durante a 13ª edição da série ¿Música?, São Paulo - SP, Brasil - 2017",
            en: "Audience during the 13th edition of the ¿Música? series, São Paulo - SP, Brazil - 2017",
            de: "Publikum während der 13. Ausgabe der Reihe ¿Música?, São Paulo - SP, Brasilien - 2017",
          },
          y: "-60%",
        },
        {
          src: "/musica_5.jpg",
          title: "Henrique Rocha",
          caption:
            "Ainda, Performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
          caption_i18n: {
            "pt-br": "Ainda, Performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
            en: "Also, Performance at ¿Música? #13, São Paulo - SP, Brazil - 2017",
            de: "Auch, Performance auf ¿Música? #13, São Paulo - SP, Brasilien - 2017",
          },
        },
      ]),
      linkUrl: "https://nusom.eca.usp.br/producoes-musica",
      linkTitle: "Saiba mais",
      linkTitle_i18n: {
        "pt-br": "Saiba mais",
        en: "Learn more",
        de: "Mehr erfahren",
      },
    },
    {
      title: "Móbile de vaca morta com vergalhões [...]",
      text: "Instalação com ossos, alto-falantes, vergalhões de ferro e com áudio de álbuns kitsch de Augusto Piccinini",
      description: `Móbile de vaca morta com vergalhões de ferro e frases de auto-ajuda narradas por vozes sintetizadas intercaladas à canções motivacionais com timbres maneiros é uma instalação na qual seis alto-falantes são instalados diretamente sobre ossos bovinos, em posições sugeridas pela própria estrutura óssea do animal. O sistema reproduz simultaneamente, em baixo volume, os álbuns de Augusto Piccinini “Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas”, “Igual ao álbum anterior mas desta vez mais radical e mais profundo” e “Just like the last two albums but this time in english in order to appeal to international audiences”. A instalação combina restos biológicos e materiais descartados na construção de uma estrutura sonora precária, situada entre decomposição e reconstrução. O trabalho cria um contraste entre essa materialidade desgastada e um universo sonoro marcado por frases motivacionais, timbres MIDI e excesso de informação. A obra propõe uma reflexão sobre formas de produção cultural que transformam ansiedade, desgaste e frustração em entretenimento, consumo e estímulo constante. A instalação foi concebida por Vinícius Fernandes em parceria com Augusto Piccinini e João Mascaro.
`,
      description_i18n: {
        "pt-br": `Móbile de vaca morta com vergalhões de ferro e frases de auto-ajuda narradas por vozes sintetizadas intercaladas à canções motivacionais com timbres maneiros é uma instalação na qual seis alto-falantes são instalados diretamente sobre ossos bovinos, em posições sugeridas pela própria estrutura óssea do animal. O sistema reproduz simultaneamente, em baixo volume, os álbuns de Augusto Piccinini “Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas”, “Igual ao álbum anterior mas desta vez mais radical e mais profundo” e “Just like the last two albums but this time in english in order to appeal to international audiences”. A instalação combina restos biológicos e materiais descartados na construção de uma estrutura sonora precária, situada entre decomposição e reconstrução. O trabalho cria um contraste entre essa materialidade desgastada e um universo sonoro marcado por frases motivacionais, timbres MIDI e excesso de informação. A obra propõe uma reflexão sobre formas de produção cultural que transformam ansiedade, desgaste e frustração em entretenimento, consumo e estímulo constante. A instalação foi concebida por Vinícius Fernandes em parceria com Augusto Piccinini e João Mascaro.
        `,
        en: `Dead cow mobile with iron rebars and self-help phrases narrated by synthesized voices interleaved with motivational songs with kitschy timbres is an installation in which six loudspeakers are installed directly on bovine bones, in positions suggested by the animal's own skeletal structure. The system reproduces, simultaneously at low volume, albums by Augusto Piccinini — “Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas”, “Igual ao álbum anterior mas desta vez mais radical e mais profundo” and “Just like the last two albums but this time in english in order to appeal to international audiences” — (album titles left untranslated). The installation combines biological remains and discarded construction materials to create a precarious sonic structure situated between decomposition and reconstruction. The work creates a contrast between this worn materiality and a sonic universe marked by motivational phrases, MIDI timbres and information overload. The piece proposes a reflection on cultural production formats that transform anxiety, wear and frustration into entertainment, consumption and constant stimulation. The installation was conceived by Vinícius Fernandes in partnership with Augusto Piccinini and João Mascaro.
        `,
        de: `Móbile de vaca morta mit Eisenstangen und Selbsthilfesätzen, die von synthetischen Stimmen erzählt werden und mit motivierenden Liedern mit kitschigen Klangfarben durchsetzt sind, ist eine Installation, in der sechs Lautsprecher direkt auf Rinderknochen installiert werden, in Positionen, die durch die Knochenstruktur des Tieres vorgegeben sind. Das System reproduziert gleichzeitig in niedriger Lautstärke Alben von Augusto Piccinini — „Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas“, „Igual ao álbum anterior mas desta vez mais radical e mais profundo“ und „Just like the last two albums but this time in english in order to appeal to international audiences“ — (Albentitel unverändert gelassen). Die Installation kombiniert biologische Überreste und weggeworfene Baumaterialien zur Konstruktion einer prekären Klangstruktur, die zwischen Zersetzung und Wiederaufbau angesiedelt ist. Die Arbeit stellt einen Kontrast zwischen dieser abgenutzten Materialität und einem klanglichen Universum dar, das von motivierenden Phrasen, MIDI‑Klangfarben und Informationsüberflutung geprägt ist. Das Werk wurde von Vinícius Fernandes in Zusammenarbeit mit Augusto Piccinini und João Mascaro konzipiert.
        `,
      },
      image: "/mobile_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/mobile_1.jpg",
          title: "Registro da Instalação",
          caption:
            "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
          caption_i18n: {
            "pt-br": "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
            en: "Espaço das Artes, University of São Paulo - SP, Brazil - 2019",
            de: "Espaço das Artes, Universität São Paulo - SP, Brasilien - 2019",
          },
        },
        {
          src: "/mobile_2.jpg",
          title: "Registro da Instalação",
          caption:
            "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
          caption_i18n: {
            "pt-br": "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
            en: "Espaço das Artes, University of São Paulo - SP, Brazil - 2019",
            de: "Espaço das Artes, Universität São Paulo - SP, Brasilien - 2019",
          },
          y: "-50%",
        },
        {
          src: "/mobile_3.jpg",
          title: "Registro da Instalação",
          caption:
            "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
          caption_i18n: {
            "pt-br": "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
            en: "Espaço das Artes, University of São Paulo - SP, Brazil - 2019",
            de: "Espaço das Artes, Universität São Paulo - SP, Brasilien - 2019",
          },
          y: "-30%",
          x600: "50%",
        },
        {
          src: "/mobile_4.jpg",
          title: "Registro da Instalação",
          caption:
            "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019.",
          caption_i18n: {
            "pt-br": "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019.",
            en: "Espaço das Artes, University of São Paulo - SP, Brazil - 2019.",
            de: "Espaço das Artes, Universität São Paulo - SP, Brasilien - 2019.",
          },
          y: "-70%",
        },
      ]),
      linkTitle: "Saiba mais",
      linkTitle_i18n: {
        "pt-br": "Saiba mais",
        en: "Learn more",
        de: "Mehr erfahren",
      },
      linkUrl:
        "https://revistapesquisa.fapesp.br/na-onda-da-musica-e-da-tecnologia/",
      embedsBandcamp: [
        {
          html: `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=743014755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://3edgy5u.bandcamp.com/album/v-rios-midis-maneiros-com-timbres-mais-maneiros-ainda-intercalados-com-frases-de-auto-ajuda-narradas-por-vozes-sintetizadas">Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas von 3edgy5u</a></iframe>`,
          caption: "Album - Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas - Augusto Piccinini",
          caption_i18n: {
            "pt-br": "Album - Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas - Augusto Piccinini",
            en: "Album - Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas - Augusto Piccinini",
            de: "Album - Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas - Augusto Piccinini",
          },
        },
      ],
    },

    {
      title: "Fitosintetizador",
      text: "Instalação sonora interativa que utiliza plantas como controladoras de síntese sonora.",
      description: `O “Fitosintetizador” é uma instalação sonora interativa que utiliza o perfil de cores de folhas e plantas para gerar composições em um piano digital. Por meio de processamento de imagem e análise cromática, diferentes tonalidades e padrões vegetais são convertidos em informações musicais, criando paisagens sonoras variáveis a partir das características visuais das plantas. A obra convida o público a trazer folhas e interagir livremente com o sistema, permitindo diferentes formas de experimentação e composição sonora. O trabalho explora relações entre natureza, tecnologia e interação, transformando elementos vegetais em interfaces musicais e deslocando noções tradicionais de instrumento, autoria e performance. O projeto foi concebido por Vinícius Fernandes em parceria com Lidia Ganhito, Gabriel Urazaki e Vitor Barão durante uma residência artística na Red Bull Station, onde um primeiro protótipo foi apresentado, e posteriormente exibido em sua versão completa no Sesc Avenida Paulista.
`,
      description_i18n: {
        "pt-br": `O “Fitosintetizador” é uma instalação sonora interativa que utiliza o perfil de cores de folhas e plantas para gerar composições em um piano digital. Por meio de processamento de imagem e análise cromática, diferentes tonalidades e padrões vegetais são convertidos em informações musicais, criando paisagens sonoras variáveis a partir das características visuais das plantas. A obra convida o público a trazer folhas e interagir livremente com o sistema, permitindo diferentes formas de experimentação e composição sonora. O trabalho explora relações entre natureza, tecnologia e interação, transformando elementos vegetais em interfaces musicais e deslocando noções tradicionais de instrumento, autoria e performance. O projeto foi concebido por Vinícius Fernandes em parceria com Lidia Ganhito, Gabriel Urazaki e Vitor Barão durante uma residência artística na Red Bull Station, onde um primeiro protótipo foi apresentado, e posteriormente exibido em sua versão completa no Sesc Avenida Paulista.`,
        en: `The “Phytosynthesizer” is an interactive sound installation that uses the color profile of leaves and plants to generate compositions on a digital piano. Through image processing and chromatic analysis, different hues and vegetal patterns are translated into musical information, creating variable soundscapes based on the plants' visual characteristics. The work invites the public to bring leaves and interact freely with the system, enabling different forms of experimentation and sonic composition. The project explores relationships between nature, technology and interaction, transforming vegetal elements into musical interfaces and displacing traditional notions of instrument, authorship and performance. The project was conceived by Vinícius Fernandes in partnership with Lidia Ganhito, Gabriel Urazaki and Vitor Barão during an artist residency at Red Bull Station, where an initial prototype was presented, and later shown in its complete version at Sesc Avenida Paulista.`,
        de: `Der „Phytosynthesizer" ist eine interaktive Klanginstallation, die das Farbprofil von Blättern und Pflanzen nutzt, um Kompositionen auf einem digitalen Klavier zu erzeugen. Durch Bildverarbeitung und chromatische Analyse werden unterschiedliche Farbtöne und pflanzliche Muster in musikalische Informationen übersetzt, wodurch variable Klanglandschaften entstehen, die auf den visuellen Merkmalen der Pflanzen basieren. Die Arbeit lädt das Publikum ein, Blätter mitzubringen und frei mit dem System zu interagieren, wodurch verschiedene Formen der Experimentation und klanglichen Komposition ermöglicht werden. Das Projekt untersucht die Beziehungen zwischen Natur, Technologie und Interaktion, verwandelt pflanzliche Elemente in musikalische Schnittstellen und verschiebt traditionelle Vorstellungen von Instrument, Autorschaft und Aufführung. Das Projekt wurde von Vinícius Fernandes in Zusammenarbeit mit Lidia Ganhito, Gabriel Urazaki und Vitor Barão während eines Künstlerresidenzprogramms in der Red Bull Station konzipiert, wo ein erster Prototyp gezeigt wurde, und später in seiner vollständigen Version im Sesc Avenida Paulista präsentiert.`,
      },
      image: "/fitosintetizador_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/fitosintetizador_1.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          caption_i18n: {
            "pt-br": "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
            en: "SESC Avenida Paulista, São Paulo - SP, Brazil - 2020",
            de: "SESC Avenida Paulista, São Paulo - SP, Brasilien - 2020",
          },
        },
        {
          src: "/fitosintetizador_2.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          caption_i18n: {
            "pt-br": "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
            en: "SESC Avenida Paulista, São Paulo - SP, Brazil - 2020",
            de: "SESC Avenida Paulista, São Paulo - SP, Brasilien - 2020",
          },
          y: "-70%",
        },
        {
          src: "/fitosintetizador_3.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          caption_i18n: {
            "pt-br": "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
            en: "SESC Avenida Paulista, São Paulo - SP, Brazil - 2020",
            de: "SESC Avenida Paulista, São Paulo - SP, Brasilien - 2020",
          },
          y: "-60%",
        },
        {
          src: "/fitosintetizador_4.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          caption_i18n: {
            "pt-br": "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
            en: "SESC Avenida Paulista, São Paulo - SP, Brazil - 2020",
            de: "SESC Avenida Paulista, São Paulo - SP, Brasilien - 2020",
          },
          y: "-10%",
        },
        {
          src: "/fitosintetizador_5.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          caption_i18n: {
            "pt-br": "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
            en: "SESC Avenida Paulista, São Paulo - SP, Brazil - 2020",
            de: "SESC Avenida Paulista, São Paulo - SP, Brasilien - 2020",
          },
        },
        {
          src: "/fitosintetizador_6.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          caption_i18n: {
            "pt-br": "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
            en: "SESC Avenida Paulista, São Paulo - SP, Brazil - 2020",
            de: "SESC Avenida Paulista, São Paulo - SP, Brasilien - 2020",
          },
        },
      ]),
      youtubeUrls: ["https://www.youtube.com/watch?v=APvD8IhDLcA"],
      youtubeCaption: ["Fitosintetizador — amostra de funcionamento do patch"],
      youtubeCaption_i18n: {
        "pt-br": ["Fitosintetizador — amostra de funcionamento do patch"],
        en: ["Phytosynthesizer — demo of the patch in operation"],
        de: ["Phytosynthesizer — Demonstration des Patches in Betrieb"],
      },
    },
    {
      title: "Echos of the deep",
      text: "Software de sonificação de dados metabólicos de esponjas marinhas",
      text_i18n: {
        "pt-br": "Software de sonificação de dados metabólicos de esponjas marinhas",
        en: "Software for sonification of metabolic data from marine sponges",
        de: "Software zur Sonifizierung metabolischer Daten von Meeres-Schwämmen",
      },
      description: `Echoes of the Deep: Sonifying the Hidden World of Sponges é um projeto interdisciplinar de arte e ciência desenvolvido por Julie Semoroz e Vinícius Fernandes em colaboração com pesquisadores do CNRS e da Marine Station of Endoume. Baseado em pesquisas metabolômicas, genéticas e taxonômicas sobre esponjas marinhas do Mediterrâneo e do Atlântico, o projeto transforma dados científicos em experiências imersivas de som e vibração por meio de um sistema de sonificação desenvolvido em Python e Pure Data. Dados de concentração química extraídos de heatmaps metabolômicos são convertidos em frequências e sintetizados em formas de onda complexas, gerando “assinaturas sonoras” únicas para oito espécies de esponjas. Essas identidades auditivas revelam similaridades e diferenças bioquímicas entre espécies, tornando perceptíveis aspectos invisíveis da biodiversidade marinha através da escuta e da vibração corporal. Ao combinar processamento digital de sinais, arte sonora experimental e biologia marinha, a obra propõe uma forma alternativa de visualização científica e engajamento público, buscando ampliar a conscientização sobre ecossistemas subaquáticos ameaçados pelas mudanças climáticas, perda de biodiversidade e ondas extremas de calor marinho.`,
      description_i18n: {
        "pt-br": `Echoes of the Deep: Sonifying the Hidden World of Sponges é um projeto interdisciplinar de arte e ciência desenvolvido por Julie Semoroz e Vinícius Fernandes em colaboração com pesquisadores do CNRS e da Marine Station of Endoume. Baseado em pesquisas metabolômicas, genéticas e taxonômicas sobre esponjas marinhas do Mediterrâneo e do Atlântico, o projeto transforma dados científicos em experiências imersivas de som e vibração por meio de um sistema de sonificação desenvolvido em Python e Pure Data. Dados de concentração química extraídos de heatmaps metabolômicos são convertidos em frequências e sintetizados em formas de onda complexas, gerando “assinaturas sonoras” únicas para oito espécies de esponjas. Essas identidades auditivas revelam similaridades e diferenças bioquímicas entre espécies, tornando perceptíveis aspectos invisíveis da biodiversidade marinha através da escuta e da vibração corporal. Ao combinar processamento digital de sinais, arte sonora experimental e biologia marinha, a obra propõe uma forma alternativa de visualização científica e engajamento público, buscando ampliar a conscientização sobre ecossistemas subaquáticos ameaçados pelas mudanças climáticas, perda de biodiversidade e ondas extremas de calor marinho.`,
        en: `Echoes of the Deep: Sonifying the Hidden World of Sponges is an interdisciplinary art-and-science project developed by Julie Semoroz and Vinícius Fernandes in collaboration with researchers from the CNRS and the Marine Station of Endoume. Based on metabolomic, genetic and taxonomic research on marine sponges from the Mediterranean and the Atlantic, the project transforms scientific data into immersive sound and vibration experiences through a sonification system developed in Python and Pure Data. Concentration data extracted from metabolomic heatmaps are converted to frequencies and synthesized into complex waveforms, generating unique “sonic signatures” for eight sponge species. These auditory identities reveal biochemical similarities and differences between species, making invisible aspects of marine biodiversity perceptible through listening and bodily vibration. By combining digital signal processing, experimental sound art and marine biology, the work proposes an alternative form of scientific visualization and public engagement, aiming to raise awareness about underwater ecosystems threatened by climate change, biodiversity loss and extreme marine heat waves.`,
        de: `Echoes of the Deep: Sonifying the Hidden World of Sponges ist ein interdisziplinäres Kunst-und-Wissenschaftsprojekt, entwickelt von Julie Semoroz und Vinícius Fernandes in Zusammenarbeit mit Forschern des CNRS und der Marine Station of Endoume. Basierend auf metabolomischen, genetischen und taxonomischen Studien über Meeres-Schwämme aus dem Mittelmeer und dem Atlantik verwandelt das Projekt wissenschaftliche Daten in immersive Klang- und Vibrations­erfahrungen mithilfe eines Sonifizierungssystems, das in Python und Pure Data entwickelt wurde. Konzentrationsdaten, die aus metabolomischen Heatmaps extrahiert wurden, werden in Frequenzen umgewandelt und zu komplexen Wellenformen synthetisiert, wodurch einzigartige „klangliche Signaturen“ für acht Schwammarten entstehen. Diese auditiven Identitäten zeigen biochemische Ähnlichkeiten und Unterschiede zwischen den Arten und machen unsichtbare Aspekte der marinen Biodiversität durch Zuhören und körperliche Vibration wahrnehmbar. Durch die Kombination von digitaler Signalverarbeitung, experimenteller Klangkunst und Meeresbiologie schlägt das Werk eine alternative Form der wissenschaftlichen Visualisierung und des öffentlichen Engagements vor und zielt darauf ab, das Bewusstsein für Unterwasserökosysteme zu schärfen, die durch den Klimawandel, den Verlust der Biodiversität und extreme marine Hitzewellen bedroht sind.`,
      },
      image: "/sponges_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/sea_sponges_1.JPG",
          title:
            "Vinícius Fernandes e Julie Semoroz durante a apresentação de Echoes of the Deep",
          caption:
            "World Sponge Conference 2025, Vila do Conde, Portugal - 2025",
          caption_i18n: {
            "pt-br": "World Sponge Conference 2025, Vila do Conde, Portugal - 2025",
            en: "World Sponge Conference 2025, Vila do Conde, Portugal - 2025",
            de: "World Sponge Conference 2025, Vila do Conde, Portugal - 2025",
          },
          y: "-80%",
        },
      ]),
      linkUrl: "https://worldspongecommunity.com/program/",
      linkTitle: "Saiba mais",
      linkTitle_i18n: {
        "pt-br": "Saiba mais",
        en: "Learn more",
        de: "Mehr erfahren",
      },
    },
    {
      title: "Discografia",
      text: "Reunião de todos discos, singles e colaborações",
      text_i18n: {
        "pt-br": "Reunião de todos discos, singles e colaborações",
        en: "Collection of all albums, singles and collaborations",
        de: "Sammlung aller Alben, Singles und Zusammenarbeiten",
      },
      description: `A Discografia reúne todos os discos, singles e colaborações de Vinícius Fernandes, apresentando uma visão abrangente de sua trajetória musical e artística. Através de uma seleção cuidadosa de faixas e projetos, a discografia reflete a evolução do artista ao longo dos anos, destacando suas experimentações sonoras e colaborações com outros músicos e artistas.
`,
      description_i18n: {
        "pt-br": `A Discografia reúne todos os discos, singles e colaborações de Vinícius Fernandes, apresentando uma visão abrangente de sua trajetória musical e artística. Através de uma seleção cuidadosa de faixas e projetos, a discografia reflete a evolução do artista ao longo dos anos, destacando suas experimentações sonoras e colaborações com outros músicos e artistas.`,
        en: `The Discography brings together all albums, singles and collaborations by Vinícius Fernandes, presenting a comprehensive overview of his musical and artistic journey. Through a careful selection of tracks and projects, the discography reflects the artist's evolution over the years, highlighting his sound experiments and collaborations with other musicians and artists.`,
        de: `Die Diskographie vereint alle Alben, Singles und Zusammenarbeiten von Vinícius Fernandes und bietet einen umfassenden Überblick über seine musikalische und künstlerische Laufbahn. Durch eine sorgfältige Auswahl von Titeln und Projekten spiegelt die Diskographie die Entwicklung des Künstlers im Laufe der Jahre wider und hebt seine Klangexperimente und Zusammenarbeiten mit anderen Musikern und Künstlern hervor.`,
      },
      image: "/discografia_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/discografia_1.jpg",
          title: "Tabutril",
          caption: "Bar do Zé, Campinas - SP, Brasil - 2015",
          caption_i18n: {
            "pt-br": "Bar do Zé, Campinas - SP, Brasil - 2015",
            en: "Bar do Zé, Campinas - SP, Brazil - 2015",
            de: "Bar do Zé, Campinas - SP, Brasilien - 2015",
          },
          y: "-50%",
        },
        {
          src: "/discografia_2.jpg",
          title: "Cassini",
          caption: " Bolderaja, Riga, Letônia - 2018",
          caption_i18n: {
            "pt-br": "Bolderaja, Riga, Letônia - 2018",
            en: "Bolderaja, Riga, Latvia - 2018",
            de: "Bolderaja, Riga, Lettland - 2018",
          },
        },
        {
          src: "/discografia_3.jpg",
          title: "Muito Nasty",
          caption: "Fauhaus, São Paulo - SP, Brasil - 2018",
          caption_i18n: {
            "pt-br": "Fauhaus, São Paulo - SP, Brasil - 2018",
            en: "Fauhaus, São Paulo - SP, Brazil - 2018",
            de: "Fauhaus, São Paulo - SP, Brasilien - 2018",
          },
          y: "-20%",
        },
        {
          src: "/discografia_4.jpg",
          title: "Pássaro-Concreto",
          caption: "Casa das Rosas, São Paulo - SP, Brasil - 2016",
          caption_i18n: {
            "pt-br": "Casa das Rosas, São Paulo - SP, Brasil - 2016",
            en: "Casa das Rosas, São Paulo - SP, Brazil - 2016",
            de: "Casa das Rosas, São Paulo - SP, Brasilien - 2016",
          },
          y: "-70%",
        },
      ]),
      embedsBandcamp: [
        { html: `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=965401561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds01-amador">[tds01] amador von Tabutril</a></iframe>`, caption: "Amador - 2015 - Tabutril", caption_i18n: { "pt-br": "Amador - 2015 - Tabutril", en: "Amador - 2015 - Tabutril", de: "Amador - 2015 - Tabutril" } },
        { html: `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=2229382614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds09-fontanela">[tds09] Fontanela von Cassini</a></iframe>`, caption: "Fontanela - 2018 - Cassini", caption_i18n: { "pt-br": "Fontanela - 2018 - Cassini", en: "Fontanela - 2018 - Cassini", de: "Fontanela - 2018 - Cassini" } },
        { html: `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1846535594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds013-muito-nasty">[tds013] Muito Nasty von Muito Nasty</a></iframe>`, caption: "Muito Nasty - 2018 - Muito Nasty", caption_i18n: { "pt-br": "Muito Nasty - 2018 - Muito Nasty", en: "Muito Nasty - 2018 - Muito Nasty", de: "Muito Nasty - 2018 - Muito Nasty" } },
        { html: `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=981793339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://passaro-concreto.bandcamp.com/album/p-ssaro-concreto">Pássaro-Concreto von Pássaro-Concreto</a></iframe>`, caption: "Pássaro-Concreto - 2016 - Pássaro-Concreto", caption_i18n: { "pt-br": "Pássaro-Concreto - 2016 - Pássaro-Concreto", en: "Pássaro-Concreto - 2016 - Pássaro-Concreto", de: "Pássaro-Concreto - 2016 - Pássaro-Concreto" } },
      ],
    },
  ];

  const techCards = [
    {
      title: "Menis",
      text: "Desenvolvimento de instrumentos eletrônicos, síntese embarcada e ferramentas para artistas e pesquisadores.",
      text_i18n: {
        "pt-br": "Desenvolvimento de instrumentos eletrônicos, síntese embarcada e ferramentas para artistas e pesquisadores.",
        en: "Development of electronic instruments, embedded synthesis and tools for artists and researchers.",
        de: "Entwicklung elektronischer Instrumente, eingebettete Synthese und Werkzeuge für Künstler und Forscher.",
      },
      description: `A Menis é uma pequena empresa dedicada ao desenvolvimento de sintetizadores, pedais e ferramentas voltadas à música eletrônica, unindo pesquisa técnica, experimentação sonora e educação tecnológica em uma abordagem acessível e independente. Atuando na interseção entre arte, eletrônica e desenvolvimento de hardware, a empresa produz instrumentos autorais comercializados no Brasil e também na Europa, buscando oferecer soluções criativas e de baixo custo para músicos, artistas, estudantes e entusiastas da síntese sonora. Além da fabricação de instrumentos, a Menis também desenvolve atividades educacionais relacionadas à construção de hardware, eletrônica aplicada à música e computação musical, tendo realizado mais de uma dezena de cursos e workshops em diferentes contextos. A proposta da empresa envolve não apenas a criação de equipamentos, mas também a difusão de conhecimento técnico e artístico, incentivando a autonomia tecnológica, o aprendizado prático e o acesso mais amplo às ferramentas de produção sonora contemporânea. 
`,
      description_i18n: {
        "pt-br": `A Menis é uma pequena empresa dedicada ao desenvolvimento de sintetizadores, pedais e ferramentas voltadas à música eletrônica, unindo pesquisa técnica, experimentação sonora e educação tecnológica em uma abordagem acessível e independente. Atuando na interseção entre arte, eletrônica e desenvolvimento de hardware, a empresa produz instrumentos autorais comercializados no Brasil e também na Europa, buscando oferecer soluções criativas e de baixo custo para músicos, artistas, estudantes e entusiastas da síntese sonora. Além da fabricação de instrumentos, a Menis também desenvolve atividades educacionais relacionadas à construção de hardware, eletrônica aplicada à música e computação musical, tendo realizado mais de uma dezena de cursos e workshops em diferentes contextos. A proposta da empresa envolve não apenas a criação de equipamentos, mas também a difusão de conhecimento técnico e artístico, incentivando a autonomia tecnológica, o aprendizado prático e o acesso mais amplo às ferramentas de produção sonora contemporânea.`,
        en: `Menis is a small company dedicated to the development of synthesizers, pedals and tools for electronic music, combining technical research, sound experimentation and technological education in an accessible and independent approach. Operating at the intersection of art, electronics and hardware development, the company produces original instruments sold in Brazil and also in Europe, seeking to offer creative and low-cost solutions for musicians, artists, students and enthusiasts of sound synthesis. In addition to instrument manufacturing, Menis also develops educational activities related to hardware construction, electronics applied to music and music computing, having conducted more than a dozen courses and workshops in different contexts. The company's proposal involves not only the creation of equipment, but also the dissemination of technical and artistic knowledge, encouraging technological autonomy, practical learning and broader access to contemporary sound production tools.`,
        de: `Menis ist ein kleines Unternehmen, das sich der Entwicklung von Synthesizern, Pedalen und Werkzeugen für elektronische Musik widmet und technische Forschung, Soundexperimente und technologische Bildung in einem zugänglichen und unabhängigen Ansatz verbindet. Das Unternehmen arbeitet an der Schnittstelle zwischen Kunst, Elektronik und Hardware-Entwicklung und produziert Originalinstrumente, die in Brasilien und Europa verkauft werden. Es versucht, kreative und kostengünstige Lösungen für Musiker, Künstler, Studenten und Enthusiasten der Soundsynthese anzubieten. Neben der Herstellung von Instrumenten entwickelt Menis auch Bildungsaktivitäten im Zusammenhang mit Hardware-Konstruktion, Elektronik in der Musik und Musikcomputing und hat mehr als ein Dutzend Kurse und Workshops in verschiedenen Kontexten durchgeführt. Der Ansatz des Unternehmens umfasst nicht nur die Schaffung von Ausrüstung, sondern auch die Verbreitung von technischem und künstlerischem Wissen, die Förderung technologischer Autonomie, praktisches Lernen und breiterer Zugang zu zeitgenössischen Soundproduktionswerkzeugen.`,
      },
      image: "/menis_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/menis_01.png",
          title: "Kenopsia",
          caption: "Fototheremin lançado em 2020",
          caption_i18n: {
            "pt-br": "Fototheremin lançado em 2020",
            en: "Phototheremin released in 2020",
            de: "Fotothereminen veröffentlicht 2020",
          },
        },
        {
          src: "/menis_02.png",
          title: "Janus",
          caption: "Sintetizador lançado em 2020",
          caption_i18n: {
            "pt-br": "Sintetizador lançado em 2020",
            en: "Synthesizer released in 2020",
            de: "Synthesizer veröffentlicht 2020",
          },
        },
        {
          src: "/menis_03.png",
          title: "Fase Racional",
          caption: "Pedal de distorção lançado em 2021",
          caption_i18n: {
            "pt-br": "Pedal de distorção lançado em 2021",
            en: "Distortion pedal released in 2021",
            de: "Distortionspedal veröffentlicht 2021",
          },
          y: "-70%",
        },
      ]),
      linkUrl: "https://www.instagram.com/menis______/",
      linkTitle: "Veja o perfil da Menis no Instagram",
      linkTitle_i18n: {
        "pt-br": "Veja o perfil da Menis no Instagram",
        en: "View Menis' Instagram profile",
        de: "Menis' Instagram-Profil anzeigen",
      },
    },
    {
      title: "Granular Player - daisySP",
      text: "_",
      text_i18n: {
        "pt-br": "_",
        en: "_",
        de: "_",
      },
      images_details: buildImageDetails([
        {
          src: "/granular_thumb.jpg",
          title: "_",
          caption: "_",
          y: "0%",
        },
      ]),
      linkUrl: "https://daisy.audio/DaisySP/classdaisysp_1_1GranularPlayer/",
      linkTitle: "Veja a documentação da classe aqui",
      linkTitle_i18n: {
        "pt-br": "Veja a documentação da classe aqui",
        en: "View the class documentation here",
        de: "Hier dokumentation der Klasse ansehen",
      },
      description: `O "Granular Player" é uma contribuição para a DaisySP Library, oferecendo um player granular otimizado para hardware Daisy. Esta ferramenta permite a manipulação avançada de áudio através de técnicas de síntese granular, possibilitando aos usuários criar texturas sonoras complexas e dinâmicas em tempo real. Projetado para eficiência e desempenho, o Granular Player amplia as capacidades do hardware Daisy, tornando-o uma opção poderosa para músicos e desenvolvedores interessados em exploração sonora e design de som.
`,
      description_i18n: {
        "pt-br": `O "Granular Player" é uma contribuição para a DaisySP Library, oferecendo um player granular otimizado para hardware Daisy. Esta ferramenta permite a manipulação avançada de áudio através de técnicas de síntese granular, possibilitando aos usuários criar texturas sonoras complexas e dinâmicas em tempo real. Projetado para eficiência e desempenho, o Granular Player amplia as capacidades do hardware Daisy, tornando-o uma opção poderosa para músicos e desenvolvedores interessados em exploração sonora e design de som.`,
        en: `"Granular Player" is a contribution to the DaisySP Library, offering a granular player optimized for Daisy hardware. This tool enables advanced audio manipulation through granular synthesis techniques, allowing users to create complex and dynamic sound textures in real time. Designed for efficiency and performance, Granular Player expands the capabilities of Daisy hardware, making it a powerful option for musicians and developers interested in sound exploration and sound design.`,
        de: `Der "Granular Player" ist ein Beitrag zur DaisySP Library und bietet einen granularen Player, der für Daisy-Hardware optimiert ist. Dieses Werkzeug ermöglicht die erweiterte Audiobearbeitung durch Granularsynthese-Techniken und ermöglicht es Benutzern, komplexe und dynamische Klangtexturen in Echtzeit zu erstellen. Der Granular Player wurde auf Effizienz und Leistung ausgelegt und erweitert die Fähigkeiten der Daisy-Hardware, was es zu einer leistungsstarken Option für Musiker und Entwickler macht, die an Sounderforschung und Sounddesign interessiert sind.`,
      },
      image: "/granular_thumb.jpg",
      imageOffsetX: "-50%",
    },
    {
      title: "Grupo de Embarcados IME-USP",
      text: "_",
      text_i18n: {
        "pt-br": "_",
        en: "_",
        de: "_",
      },
      images_details: buildImageDetails([
        {
          src: "/embarcados_thumb.jpg",
          title: "_",
          caption: "_",
          y: "-100%",
        },
      ]),
      linkUrl:
        "https://github.com/viniciusfersil123/ime-embarcados-lib/blob/main/main/ime-embarcados-lib.cpp",
      linkTitle: "Veja o repositório do grupo no GitHub",
      linkTitle_i18n: {
        "pt-br": "Veja o repositório do grupo no GitHub",
        en: "View the group's repository on GitHub",
        de: "Sehen Sie sich das Repository der Gruppe auf GitHub an",
      },
      description: `O Grupo de Embarcados IME-USP é um coletivo de pesquisa e desenvolvimento focado em sistemas embarcados para música e áudio. Composto por estudantes, pesquisadores e profissionais da área, o grupo trabalha na criação de soluções inovadoras que combinam hardware e software para aplicações musicais. Suas atividades incluem o desenvolvimento de instrumentos eletrônicos, interfaces de controle, algoritmos de processamento de sinal e plataformas abertas, promovendo a experimentação sonora e a disseminação do conhecimento técnico na comunidade acadêmica e artística.
`,
      description_i18n: {
        "pt-br": `O Grupo de Embarcados IME-USP é um coletivo de pesquisa e desenvolvimento focado em sistemas embarcados para música e áudio. Composto por estudantes, pesquisadores e profissionais da área, o grupo trabalha na criação de soluções inovadoras que combinam hardware e software para aplicações musicais. Suas atividades incluem o desenvolvimento de instrumentos eletrônicos, interfaces de controle, algoritmos de processamento de sinal e plataformas abertas, promovendo a experimentação sonora e a disseminação do conhecimento técnico na comunidade acadêmica e artística.`,
        en: `The IME-USP Embedded Systems Group is a research and development collective focused on embedded systems for music and audio. Composed of students, researchers and professionals in the field, the group works on creating innovative solutions that combine hardware and software for musical applications. Its activities include the development of electronic instruments, control interfaces, signal processing algorithms and open platforms, promoting sound experimentation and the dissemination of technical knowledge in the academic and artistic community.`,
        de: `Die IME-USP Embedded Systems Group ist ein Forschungs- und Entwicklungskollektiv, das sich auf eingebettete Systeme für Musik und Audio konzentriert. Die Gruppe besteht aus Studenten, Forschern und Fachleuten aus diesem Bereich und arbeitet an der Schaffung innovativer Lösungen, die Hardware und Software für Musikanwendungen kombinieren. Ihre Aktivitäten umfassen die Entwicklung elektronischer Instrumente, Steuerungsschnittstellen, Signalverarbeitungsalgorithmen und offener Plattformen und fördern Soundexperimente und die Verbreitung von technischem Wissen in der akademischen und künstlerischen Gemeinschaft.`,
      },
      image: "/embarcados_thumb.jpg",
      imageOffsetX: "-50%",
    },
  ];

  const softwareCards = [
    {
      title: "UOL",
      text: "Desenvolvimento de backend e frontend para o maior portal de notícias da América Latina.",
      text_i18n: {
        "pt-br": "Desenvolvimento de backend e frontend para o maior portal de notícias da América Latina.",
        en: "Backend and frontend development for the largest news portal in Latin America.",
        de: "Backend- und Frontend-Entwicklung für das größte Nachrichtenportal in Lateinamerika.",
      },
      description: `UOL é uma das maiores empresas brasileiras de tecnologia, mídia e serviços digitais, responsável pelo maior portal de conteúdo em língua portuguesa do Brasil, com milhões de usuários mensais e atuação em áreas como jornalismo digital, streaming, cloud computing, hospedagem e pagamentos online. Durante sua atuação como engenheiro de software na empresa, Vinícius Fernandes trabalhou no desenvolvimento e manutenção de aplicações web utilizando tecnologias como JavaScript, TypeScript, Vue.js, Node.js, Docker e SCSS, atuando em arquiteturas de microsserviços e no desenvolvimento de interfaces e sistemas escaláveis para plataformas de grande alcance. Seu trabalho envolveu integração entre equipes multidisciplinares, otimização de aplicações e desenvolvimento de soluções para ambientes de alta demanda e grande volume de acesso.`,
      description_i18n: {
        "pt-br": `UOL é uma das maiores empresas brasileiras de tecnologia, mídia e serviços digitais. Durante sua atuação como engenheiro de software na empresa, Vinícius Fernandes trabalhou no desenvolvimento e manutenção de aplicações web com JavaScript, TypeScript, Vue.js, Node.js, Docker e SCSS, atuando em arquiteturas de microsserviços e em sistemas escaláveis.`,
        en: `UOL is one of Brazil's largest technology, media and digital services companies. During his work as a software engineer at the company, Vinícius Fernandes developed and maintained web applications with JavaScript, TypeScript, Vue.js, Node.js, Docker and SCSS, working on microservices architectures and scalable systems.`,
        de: `UOL ist eines der größten brasilianischen Unternehmen für Technologie, Medien und digitale Dienste. Während seiner Tätigkeit als Softwareentwickler im Unternehmen arbeitete Vinícius Fernandes an Webanwendungen mit JavaScript, TypeScript, Vue.js, Node.js, Docker und SCSS und an skalierbaren Systemen auf Microservices-Basis.`,
      },
      image: "/uol_thumb.jpg",
      imageOffsetY: "-35%",
      images_details: buildImageDetails([
        {
          src: "/uol_01.jpg",
          title: "_",
          caption: "_",
          y: "-60%",
        },
      ]),
      linkUrl:
        "https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2026/05/08/moraes-e-sorteado-relator-de-duas-acoes-que-questionam-a-validade-da-lei-da-dosimetria-no-stf.htm",
      linkTitle:
        "Veja um exemplo de uma página do portal UOL em que Vinícius atuou no desenvolvimento de frontend e backend.",
      linkTitle_i18n: {
        "pt-br": "Veja um exemplo de uma página do portal UOL em que Vinícius atuou no desenvolvimento de frontend e backend.",
        en: "See an example page from the UOL portal where Vinícius worked on frontend and backend development.",
        de: "Sehen Sie sich eine Beispielseite des UOL-Portals an, an der Vinícius an der Frontend- und Backend-Entwicklung gearbeitet hat.",
      },
    },
    {
      title: "Nexo Jornal",
      text: "Atualização de stack, integração de dados e desenvolvimento de novas funcionalidades para o portal de notícias.",
      text_i18n: {
        "pt-br": "Atualização de stack, integração de dados e desenvolvimento de novas funcionalidades para o portal de notícias.",
        en: "Stack updates, data integration and development of new features for the news portal.",
        de: "Aktualisierung des Tech-Stacks, Datenintegration und Entwicklung neuer Funktionen für das Nachrichtenportal.",
      },
      description: `Nexo Jornal é um veículo brasileiro de jornalismo digital independente reconhecido por sua abordagem analítica e contextualizada sobre política, economia, cultura, ciência e tecnologia. Fundado em 2015 em São Paulo, o Nexo se destacou internacionalmente por seu foco em jornalismo visual, experiência digital e modelos independentes de financiamento baseados em assinatura. Durante sua atuação no jornal, Vinícius Fernandes trabalhou como desenvolvedor e Product Owner, desenvolvendo aplicações web com React.js, Next.js, JavaScript e TypeScript, além de atuar com CSS, Styled-components e integração de serviços em nuvem via AWS. Seu trabalho envolveu desenvolvimento front-end, design de interfaces responsivas, revisão de código, colaboração em equipes multidisciplinares e criação de soluções digitais voltadas à experiência editorial e à distribuição de conteúdo em uma das principais iniciativas de jornalismo digital independente do Brasil.`,
      description_i18n: {
        "pt-br": `Nexo Jornal é um veículo brasileiro de jornalismo digital independente reconhecido por sua abordagem analítica e contextualizada sobre política, economia, cultura, ciência e tecnologia. Fundado em 2015 em São Paulo, o Nexo se destacou internacionalmente por seu foco em jornalismo visual, experiência digital e modelos independentes de financiamento baseados em assinatura. Durante sua atuação no jornal, Vinícius Fernandes trabalhou como desenvolvedor e Product Owner, desenvolvendo aplicações web com React.js, Next.js, JavaScript e TypeScript, além de atuar com CSS, Styled-components e integração de serviços em nuvem via AWS. Seu trabalho envolveu desenvolvimento front-end, design de interfaces responsivas, revisão de código, colaboração em equipes multidisciplinares e criação de soluções digitais voltadas à experiência editorial e à distribuição de conteúdo em uma das principais iniciativas de jornalismo digital independente do Brasil.`,
        en: `Nexo Jornal is an independent Brazilian digital journalism outlet known for its analytical and contextual approach to politics, economy, culture, science and technology. Founded in 2015 in São Paulo, Nexo gained international recognition for its focus on visual journalism, digital experience and subscription-based independent funding models. During his time at the newspaper, Vinícius Fernandes worked as a developer and Product Owner, building web applications with React.js, Next.js, JavaScript and TypeScript, as well as working with CSS, Styled-components and cloud service integration via AWS. His work involved frontend development, responsive interface design, code review, collaboration in multidisciplinary teams and the creation of digital solutions oriented to editorial experience and content distribution in one of Brazil's main independent digital journalism initiatives.`,
        de: `Nexo Jornal ist ein unabhängiges brasilianisches digitales Nachrichtenmedium, das für seinen analytischen und kontextualisierten Ansatz in Politik, Wirtschaft, Kultur, Wissenschaft und Technologie bekannt ist. 2015 in São Paulo gegründet, erlangte Nexo internationale Aufmerksamkeit durch den Fokus auf visuellen Journalismus, digitale Nutzererfahrung und unabhängige Finanzierungsmodelle auf Abonnementbasis. Während seiner Tätigkeit bei der Zeitung arbeitete Vinícius Fernandes als Entwickler und Product Owner und entwickelte Webanwendungen mit React.js, Next.js, JavaScript und TypeScript sowie mit CSS, Styled-components und Cloud-Service-Integration über AWS. Seine Arbeit umfasste Frontend-Entwicklung, responsives Interface-Design, Code-Reviews, Zusammenarbeit in multidisziplinären Teams und die Entwicklung digitaler Lösungen für das redaktionelle Erlebnis und die Verbreitung von Inhalten in einer der wichtigsten unabhängigen digitalen Journalismus-Initiativen Brasiliens.`,
      },
      image: "/nexo_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/nexo_thumb.jpg",
          title: "São Paulo, Brasil",
          caption: "Imagem da redação do Nexo Jornal",
        },
      ]),
      linkUrl:
        "https://www.nexojornal.com.br/expresso/2026/05/08/chefe-da-casa-civil-bolsonaro-ciro-nogueira-operacao-pf-banco-master",
      linkTitle:
        "Veja um exemplo de uma página do portal Nexo Jornal em que Vinícius atuou no desenvolvimento de frontend e backend.",
      linkTitle_i18n: {
        "pt-br": "Veja um exemplo de uma página do portal Nexo Jornal em que Vinícius atuou no desenvolvimento de frontend e backend.",
        en: "See an example page from the Nexo Jornal portal where Vinícius worked on frontend and backend development.",
        de: "Sehen Sie sich eine Beispielseite des Nexo Jornal-Portals an, an der Vinícius an der Frontend- und Backend-Entwicklung gearbeitet hat.",
      },
    },
  ];

  // nova coleção: Pesquisa & Publicações
  const publicationCards = [
    {
      title: "Cut-Up as Political Practice",
      text: "Artigo para a revista Norient analisando o cut-up de Burroughs como prática política contra manipulação midiática.",
      text_i18n: {
        "pt-br": "Artigo para a revista Norient analisando o cut-up de Burroughs como prática política contra manipulação midiática.",
        en: "Article for Norient magazine analyzing Burroughs' cut-up as a political practice against media manipulation.",
        de: "Artikel für das Norient-Magazin, der Burroughs' Cut-Up als politische Praxis gegen Medienmaniulation analysiert.",
      },
      description: `O artigo Cut-Up as Political Practice, publicado pela Norient em 2020, investiga a técnica de cut-up desenvolvida por William S. Burroughs como uma prática estética e política relacionada à manipulação de signos, mídia e percepção. No texto, Vinícius Fernandes analisa como os experimentos de Burroughs com fragmentação, recombinação e deformação de textos e fitas magnéticas anteciparam fenômenos contemporâneos ligados à manipulação algorítmica da informação, como o escândalo Cambridge Analytica e o uso de dados para propaganda política direcionada. A partir de referências em teoria da mídia, estudos do som e crítica cultural, o artigo discute como técnicas de sampling e edição sonora podem revelar as estruturas materiais e ideológicas ocultas por trás da aparente normalidade dos meios de comunicação. O texto propõe o cut-up não apenas como procedimento artístico experimental, mas como ferramenta crítica capaz de suspender a "normalidade semiótica" dos ambientes midiáticos e tornar perceptíveis os mecanismos de controle, poder e produção de subjetividade presentes nas tecnologias contemporâneas.`,
      description_i18n: {
        "pt-br": `O artigo Cut-Up as Political Practice, publicado pela Norient em 2020, investiga a técnica de cut-up desenvolvida por William S. Burroughs como uma prática estética e política relacionada à manipulação de signos, mídia e percepção. No texto, Vinícius Fernandes analisa como os experimentos de Burroughs com fragmentação, recombinação e deformação de textos e fitas magnéticas anteciparam fenômenos contemporâneos ligados à manipulação algorítmica da informação, como o escândalo Cambridge Analytica e o uso de dados para propaganda política direcionada. A partir de referências em teoria da mídia, estudos do som e crítica cultural, o artigo discute como técnicas de sampling e edição sonora podem revelar as estruturas materiais e ideológicas ocultas por trás da aparente normalidade dos meios de comunicação. O texto propõe o cut-up não apenas como procedimento artístico experimental, mas como ferramenta crítica capaz de suspender a "normalidade semiótica" dos ambientes midiáticos e tornar perceptíveis os mecanismos de controle, poder e produção de subjetividade presentes nas tecnologias contemporâneas.`,
        en: `The article Cut-Up as Political Practice, published by Norient in 2020, investigates the cut-up technique developed by William S. Burroughs as an aesthetic and political practice related to the manipulation of signs, media and perception. In the text, Vinícius Fernandes analyzes how Burroughs' experiments with fragmentation, recombination and deformation of texts and magnetic tapes anticipated contemporary phenomena related to algorithmic information manipulation, such as the Cambridge Analytica scandal and the use of data for targeted political propaganda. Drawing on references in media theory, sound studies and cultural criticism, the article discusses how sampling and sound editing techniques can reveal the material and ideological structures hidden behind the apparent normality of the media. The text proposes cut-up not only as an experimental artistic procedure, but as a critical tool capable of suspending the "semiotic normality" of media environments and making perceptible the mechanisms of control, power and production of subjectivity present in contemporary technologies.`,
        de: `Der Artikel Cut-Up as Political Practice, veröffentlicht von Norient 2020, untersucht die von William S. Burroughs entwickelte Cut-Up-Technik als ästhetische und politische Praxis im Zusammenhang mit der Manipulation von Zeichen, Medien und Wahrnehmung. Im Text analysiert Vinícius Fernandes, wie Burroughs' Experimente mit Fragmentierung, Rekombination und Verformung von Texten und Magnetbändern zeitgenössische Phänomene im Zusammenhang mit algorithmischer Informationsmanipulation wie der Cambridge-Analytica-Skandal und die Verwendung von Daten für gezielte politische Propaganda vorwegnahmen. Mit Bezug auf Medientheorie, Sound Studies und Kulturkritik erörtert der Artikel, wie Sampling- und Soundbearbeitungstechniken die materiellen und ideologischen Strukturen offenbaren können, die hinter der scheinbaren Normalität der Medien verborgen sind. Der Text schlägt Cut-Up nicht nur als experimentelles künstlerisches Verfahren vor, sondern als kritisches Werkzeug, das die „semiotische Normalität" von Medienumgebungen aufheben und die Mechanismen der Kontrolle, Macht und Produktion von Subjektivität in zeitgenössischen Technologien wahrnehmbar machen kann.`,
      },
      image: "/cutup_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/norient_01.png",
          title: "_",
          caption: "_",
          y: "-10%",
        },
      ]),
      linkUrl: "https://norient.com/vinicius-fernandes/cut-political-practice",
      linkTitle: "Leia o artigo na íntegra aqui",
      linkTitle_i18n: {
        "pt-br": "Leia o artigo na íntegra aqui",
        en: "Read the full article here",
        de: "Lesen Sie den vollständigen Artikel hier",
      },
    },
    {
      title:
        "A Emergência do Sujeito na Narrativa do Prelúdio Op. 28 no. 14 de Chopin",
      text: "_",
      text_i18n: {
        "pt-br": "_",
        en: "_",
        de: "_",
      },
      description: `O artigo sobre o prelúdio Op. 28 nº 14 de Chopin analisa a emergência do sujeito a partir da narratividade musical e da semiótica.`,
      description_i18n: {
        "pt-br": `O artigo sobre o prelúdio Op. 28 nº 14 de Chopin analisa a emergência do sujeito a partir da narratividade musical e da semiótica.`,
        en: `The article on Chopin's Prelude Op. 28 No. 14 analyzes the emergence of the subject through musical narrativity and semiotics.`,
        de: `Der Artikel über Chopins Prélude Op. 28 Nr. 14 untersucht die Entstehung des Subjekts anhand musikalischer Narrativität und Semiotik.`,
      },
      image: "/chopin_thumb.png",
      images_details: buildImageDetails([
        {
          src: "/chopin_thumb.png",
          title: "_",
          caption: "_",
        },
      ]),
      linkUrl:
        "https://revistamusicatheorica.tema.mus.br/index.php/musica-theorica/article/view/49",
      linkTitle: "Leia o artigo na íntegra aqui",
      linkTitle_i18n: {
        "pt-br": "Leia o artigo na íntegra aqui",
        en: "Read the full article here",
        de: "Lesen Sie den vollständigen Artikel hier",
      },
    },
    {
      title: "The medium becomes infected by the message[...]",
      text: "_",
      text_i18n: {
        "pt-br": "_",
        en: "_",
        de: "_",
      },
      description: `Artigo de Vinícius Fernandes sobre mídia, som experimental e linguagem a partir de Boris Groys e William S. Burroughs.`,
      description_i18n: {
        "pt-br": `Artigo de Vinícius Fernandes sobre mídia, som experimental e linguagem a partir de Boris Groys e William S. Burroughs.`,
        en: `Article by Vinícius Fernandes on media, experimental sound and language through Boris Groys and William S. Burroughs.`,
        de: `Artikel von Vinícius Fernandes über Medien, experimentellen Klang und Sprache im Dialog mit Boris Groys und William S. Burroughs.`,
      },
      image: "/sonologia_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/sonologia_01.png",
          title: "_",
          caption: "_",
          y: "-90%",
        },
      ]),
      linkUrl: "https://sonologia2019.eca.usp.br/?page_id=1469",
      linkTitle: "Leia o artigo na íntegra aqui",
      linkTitle_i18n: {
        "pt-br": "Leia o artigo na íntegra aqui",
        en: "Read the full article here",
        de: "Lesen Sie den vollständigen Artikel hier",
      },
    },
  ];

  const cardsWithSlug = cards.map((item) => ({
    ...item,
    slug: slugify(item.title),
    caption: "Lorem ispu, São Paulo (2026)",
  }));

  const techCardsWithSlug = techCards.map((item) => ({
    ...item,
    slug: slugify(item.title),
    caption: "Lorem ispu, São Paulo (2026)",
  }));

  const softwareCardsWithSlug = softwareCards.map((item) => ({
    ...item,
    slug: slugify(item.title),
    caption: "Lorem ispu, São Paulo (2026)",
  }));

  const publicationCardsWithSlug = publicationCards.map((item) => ({
    ...item,
    slug: slugify(item.title),
    caption: "Lorem ispu, São Paulo (2026)",
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

  const localizedPublicationCards = publicationCardsWithSlug.map(
    (item, index) => ({
      ...item,
      titleKey: `home.cards.publications.${index}.title`,
      textKey: `home.cards.publications.${index}.text`,
    }),
  );

  const homeHighlightItems = [
    {
      src: "/teaser_1.jpg",
      title: t("home.highlights.0.title"),
      caption: t("home.highlights.0.caption"),
    },
    {
      src: "/teaser_2.jpg",
      title: t("home.highlights.1.title"),
      caption: t("home.highlights.1.caption"),
    },
    {
      src: "/teaser_3.jpg",
      title: t("home.highlights.2.title"),
      caption: t("home.highlights.2.caption"),
    },
    {
      src: "/teaser_4.jpg",
      title: t("home.highlights.3.title"),
      caption: t("home.highlights.3.caption"),
    },
    {
      src: "/teaser_5.jpg",
      title: t("home.highlights.4.title"),
      caption: t("home.highlights.4.caption"),
    },
  ];

  // expõe tudo para a página Detail
  (window as any).__APP_ALL__ = [
    ...cardsWithSlug,
    ...techCardsWithSlug,
    ...softwareCardsWithSlug,
    ...publicationCardsWithSlug,
  ];

  const params = useParams();

  // quando estivermos na rota de item, usar dinamicamente o título/texto do item
  const allItems = (window as any).__APP_ALL__ || [];
  const currentItem = params.slug
    ? allItems.find(
        (it: any) =>
          (it.slug as string) === params.slug ||
          slugify(String(it.title || "")) === params.slug,
      )
    : null;

  const heroTitle = currentItem?.title || t("hero.title");
  const heroSubtitle = currentItem?.text || t("hero.subtitle");

  const highlightTextItems = currentItem?.images_details?.length
    ? currentItem.images_details.slice(0, 5).map((img: any, index: number) => ({
        title: img?.title || `${currentItem.title} ${index + 1}`,
        caption:
          img?.caption_i18n?.[lang] ?? img?.caption ?? currentItem.caption ?? "Lorem ispu, São Paulo (2026)",
      }))
    : undefined;

  const highlightImageItems = currentItem?.images_details?.length
    ? currentItem.images_details
        .slice(0, 5)
        .map((img: any) => ({
          src: img?.src,
          offsets:
            img?.imageOffsetX ||
            img?.imageOffsetY ||
            img?.imageOffsetX900 ||
            img?.imageOffsetY900 ||
            img?.imageOffsetX600 ||
            img?.imageOffsetY600
              ? {
                  desktop: {
                    x: img?.imageOffsetX || "0px",
                    y: img?.imageOffsetY || "-60%",
                  },
                  max900: {
                    x: img?.imageOffsetX900 || img?.imageOffsetX || "0px",
                    y: img?.imageOffsetY900 || img?.imageOffsetY || "-60%",
                  },
                  max600: {
                    x:
                      img?.imageOffsetX600 ||
                      img?.imageOffsetX900 ||
                      img?.imageOffsetX ||
                      "0px",
                    y:
                      img?.imageOffsetY600 ||
                      img?.imageOffsetY900 ||
                      img?.imageOffsetY ||
                      "-60%",
                  },
                }
              : undefined,
        }))
        .filter((img: any) => Boolean(img.src))
    : undefined;

  const heroHighlightItems = currentItem?.images_details?.length
    ? highlightImageItems
    : homeHighlightItems;

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

  // quando abrir item via clique (pushState), também subir
  const openItem = (it: any) => {
    const slug = (it.slug as string) || slugify(String(it.title || ""));
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
    const url = `${basePath}/item/${slug}`;
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
    // garante topo em navegação programática
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  };

  // closeDetail not needed; Detail uses back navigation

  return (
    <div className="app">
      <Header brandName="Vinícius Fernandes" />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <h1>
              {heroTitle}
              <br />
            </h1>
            <p>{heroSubtitle}</p>
            {/* hero caption reserved for main page only */}
          </div>

          <div className="hero-highlights-wrapper">
            <Highlights
              textItems={highlightTextItems}
              imageItems={heroHighlightItems}
            />
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
          {currentItem ? (
            <>
                    {currentItem.description ? (
                      <p>{currentItem.description_i18n?.[lang] ?? currentItem.description}</p>
                    ) : null}
                    {currentItem.linkUrl ? (
                <div className="detail-link-row detail-link-row--hero">
                  <a
                    className="detail-link detail-hero-link"
                    href={currentItem.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                          {(currentItem.linkTitle_i18n?.[lang] ?? currentItem.linkTitle) || currentItem.linkUrl} {" "}
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              ) : null}
            </>
          ) : (
            <>
              <h2>{t("section.about.title")}</h2>
              <p>{t("section.about.p1")}</p>
            </>
          )}
        </section>

        {!currentItem && (
          <>
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
              <ul
                className="contact-links"
                aria-label={t("home.contact.linksAria")}
              >
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
          </>
        )}
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
