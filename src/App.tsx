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
  x?: string;
  y?: string;
  x900?: string;
  y900?: string;
  x600?: string;
  y600?: string;
};

function buildImageDetails(details: ImageDetailInput[]) {
  return details.map(
    ({ src, title, caption, x, y, x900, y900, x600, y600 }) => {
      const isPlaceholder = src.includes("placeholder.jpg");

      return {
        src,
        title,
        caption,
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

function buildBandcampEmbed(html: string, caption: string) {
  return { html, caption };
}

function App() {
  const { t } = useTranslation();

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
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1846535594/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds013-muito-nasty">[tds013] Muito Nasty von Muito Nasty</a></iframe>`,
          "2019 - Muito Nasty - Muito Nasty",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=3315268750/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds015-terror-da-terra">[tds015] Terror da terra von Gabriel Edé</a></iframe>`,
          "2020 - Terror da Terra - Gabriel Edé",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=3896437244/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds05-the-mystical-sounds-of-historical-materialism">[tds05] The Mystical Sounds of Historical Materialism von Ajnabi</a></iframe>`,
          "2016 - The Mystical Sounds of Historical Materialism - Ajnabi",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1951198024/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds04-o-maior-brasileiro-de-todos-os-tempos">[tds04] O Maior Brasileiro de Todos os Tempos von As Colegas de Trabalho</a></iframe>`,
          "2015 - O Maior Brasileiro de Todos os Tempos - As Colegas de Trabalho",
        ),
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
      linkUrl: "https://tudos.bandcamp.com/",
      linkTitle: "Ouça todo o catálogo clicando aqui",
    },
    {
      title: "9 chifres",
      text: "Peça eletrônica baseada na canção lituana Kalėdų rytu rožė inžydo, apresentada na 32ª Bienal de São Paulo.",
      description: `"9 chifres" é uma peça para guitarra e eletrônica, apresentada em performance no dia 11 de dezembro de 2016 (16h–17h), no Pavilhão da Bienal, Psychotropic House (1º andar), durante a 32ª Bienal de São Paulo. Todo o material sonoro parte da canção tradicional lituana Kalėdų rytu rožė inžydo, em que a aparição de um cervo de nove chifres desencadeia imagens de atualização cosmológica. O universo melódico da canção é expandido em texturas eletrônicas geradas por diferentes técnicas de síntese e processamento computacional. Inspirada em experiências de "composição verbal" da música eletroacústica — como Gesang der Jünglinge (1955–1956), de Karlheinz Stockhausen, e Thema (Omaggio a Joyce) (1958), de Luciano Berio — a obra também utiliza sons derivados da voz feminina que canta a canção. A peça foi difundida em um sistema sonoro instalado em 9 objetos com micélio do fungo Pleurotus ostreatus, integrando o trabalho Psychotropic House: Zooetics Pavilion of Ballardian Technologies, de Nomeda & Gediminas Urbonas.
    `,
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
      image: "/metempsicose_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/metempsicose_1.jpg",
          title: "Metempsicose",
          caption:
            "Instalação sonora com rádio, alto-falantes e instrumentos modificados.",
          x: "0px",
          y: "-75%",
        },
        {
          src: "/metempsicose_2.jpg",
          title: "Metempsicose — imagem 2",
          caption: "Detalhe do arranjo dos componentes eletroacústicos.",
          y: "-30%",
        },
        {
          src: "/metempsicose_3.jpg",
          title: "Metempsicose — imagem 3",
          caption: "Outro registro da montagem e da espacialização do som.",
          y: "-30%",
        },
        {
          src: "/metempsicose_4.jpg",
          title: "Metempsicose — imagem 4",
          caption: "Vista da obra em interação com o ambiente expositivo.",
          y: "-65%",
        },
        {
          src: "/metempsicose_5.jpg",
          title: "Metempsicose — imagem 5",
          caption:
            "Detalhe dos alto-falantes modificados ligados à guitarra e ao tamtam.",
          y: "-50%",
        },
      ]),
      embedsBandcamp: [
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/track=2447535245/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://viniciusfernandesssss.bandcamp.com/track/metempsicose">Metempsicose von Vinícius Fernandes</a></iframe>`,
          "2016 - Metempsicose - Vinícius Fernandes - Registro em áudio",
        ),
      ],
    },
    {
      title: "¿Música?",
      text: "Série de performances/exposições de arte sonora/música experimental realizada desde 2005",
      description: `¿Música? é uma série de performances realizada desde 2005 que toma produções sonoras e musicais como ponto de discussão e reflexão sobre a produção musical contemporânea. O evento reúne trabalhos ligados ao experimentalismo, ao uso crítico de tecnologias de produção sonora, à integração entre elementos visuais, gestuais e sonoros, ao emprego de técnicas de improvisação e à exploração dos espaços de performance. Vinícius Fernandes atuou como curador da 12ª e 13ª edições da série.`,
      image: "/musica_thumb.jpg",
      imageOffsetX: "50%",
      imageOffsetY: "40%",
      images_details: buildImageDetails([
        {
          src: "/musica_1.JPG",
          title: "Mariana Carvalho",
          caption: "Perfomance em ¿Música? #12, São Paulo - SP, Brasil - 2017",
          y: "-84%",
          x600: "50%",
        },
        {
          src: "/musica_2.jpg",
          title: "Luís Fernando Cirne, Gustavo Branco e Paulo Assis",
          caption: "Planos de Saturação — performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
          y: "-54%",
          y900: "-80%",
          x600: "-15%",
        },
        {
          src: "/musica_3.jpg",
          title: "Denis Abranches e Alessandra Bono Vox",
          caption: "Duo Movente — performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
          y: "-75%",
          x600: "-30%",
        },
        {
          src: "/musica_4.jpg",
          title: "¿Música? 13",
          caption: "Público durante a 13ª edição da série ¿Música?, São Paulo - SP, Brasil - 2017",
          y: "-60%",
        },
        {
          src: "/musica_5.jpg",
          title: "Henrique Rocha",
          caption: "Ainda, Performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
        },
      ]),
      linkUrl: "https://nusom.eca.usp.br/producoes-musica",
      linkTitle: "Saiba mais",
    },
    {
      title: "Móbile de vaca morta com vergalhões de ferro [...]",
      text: "Instalação com ossos, alto-falantes, vergalhões de ferro e com áudio de álbuns kitsch de Augusto Piccinini",
      description: `Six loudspeakers are installed directly on cow bones, in positions suggested plastically by the animal's own bone structure. The sound system plays simultaneously, in subtle volume, Augusto Piccinini’s albums “Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas”, “Igual ao album anterior mas desta vez mais radical e mais profundo”, “Just like the last two albums but this time in english in order to appeal to international audiences”. The installation performs a kind of teratogenic resuscitation by reconstituting an animal-building from biological and architectural waste. Precarious and dying structure that forms an ironic oxymoron with the sound material, constituted by the semiotic saturation of the kitsch universe of a literature and musical production obsessed with the obliteration of the fundamental existential anguish of human experience.
`,
      image: "/mobile_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/mobile_1.jpg",
          title: "Móbile de vaca morta — imagem 1",
          caption:
            "Registro da instalação com ossos, alto-falantes e vergalhões.",
        },
        {
          src: "/mobile_2.jpg",
          title: "Móbile de vaca morta — imagem 2",
          caption: "Detalhe do suporte e da composição material da obra.",
        },
        {
          src: "/mobile_3.jpg",
          title: "Móbile de vaca morta — imagem 3",
          caption:
            "Vista lateral da instalação sonora e seus elementos plásticos.",
        },
        {
          src: "/mobile_4.jpg",
          title: "Móbile de vaca morta — imagem 4",
          caption: "Imagem final da documentação da peça.",
        },
      ]),
      embedsBandcamp: [
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=743014755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://3edgy5u.bandcamp.com/album/v-rios-midis-maneiros-com-timbres-mais-maneiros-ainda-intercalados-com-frases-de-auto-ajuda-narradas-por-vozes-sintetizadas">Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas von 3edgy5u</a></iframe>`,
          "Lorem ipsum dolor sit amet.",
        ),
      ],
    },

    {
      title: "Fitosintetizador",
      text: "Instalação sonora interativa que utiliza plantas como controladoras de síntese sonora.",
      description: `O "Fitosintetizador" é uma instalação sonora interativa que explora a relação entre natureza e tecnologia. Utilizando plantas como controladoras de síntese sonora, a obra convida os espectadores a interagir com o ambiente de forma única, criando paisagens sonoras dinâmicas e orgânicas. Através de sensores e processamento de sinais, as plantas se tornam instrumentos musicais, desafiando as noções tradicionais de autoria e performance.
`,
      image: "/fitosintetizador_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/fitosintetizador_1.jpg",
          title: "Fitosintetizador — imagem 1",
          caption: "Plantas utilizadas como controladoras da síntese sonora.",
        },
        {
          src: "/fitosintetizador_2.jpg",
          title: "Fitosintetizador — imagem 2",
          caption: "Detalhe dos sensores e da interação com o ambiente.",
        },
        {
          src: "/fitosintetizador_3.jpg",
          title: "Fitosintetizador — imagem 3",
          caption: "Vista da instalação em funcionamento.",
        },
        {
          src: "/fitosintetizador_4.jpg",
          title: "Fitosintetizador — imagem 4",
          caption: "Outro enquadramento da obra interativa com plantas.",
        },
        {
          src: "/fitosintetizador_5.jpg",
          title: "Fitosintetizador — imagem 5",
          caption: "Registro do conjunto de síntese e resposta sonora.",
        },
        {
          src: "/fitosintetizador_6.jpg",
          title: "Fitosintetizador — imagem 6",
          caption: "Detalhe da materialidade da instalação sonora.",
        },
        {
          src: "/fitosintetizador_7.jpg",
          title: "Fitosintetizador — imagem 7",
          caption: "Última imagem da série de documentação do projeto.",
        },
      ]),
    },
    {
      title: "Echos of the deep",
      text: "Software de sonificação de dados metabólicos de esponjas marinhas. Apresentado no contexto 12th World Sponge Conference",
      description: `Echos of the deep é um software de sonificação de dados metabólicos de esponjas marinhas, apresentado no contexto da 12th World Sponge Conference. A obra explora as interações entre os organismos marinhos e seu ambiente, utilizando técnicas de sonificação para transformar dados científicos em experiências sonoras imersivas.
`,
      image: "/sponges_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/placeholder.jpg",
          title: "Echos of the deep — imagem 1",
          caption: "Espaço reservado para registro visual da sonificação.",
        },
        {
          src: "/placeholder.jpg",
          title: "Echos of the deep — imagem 2",
          caption: "Imagem de apoio da apresentação do software.",
        },
        {
          src: "/placeholder.jpg",
          title: "Echos of the deep — imagem 3",
          caption: "Documento visual complementar do projeto.",
        },
        {
          src: "/placeholder.jpg",
          title: "Echos of the deep — imagem 4",
          caption: "Registro reservado para a conferência e a obra.",
        },
      ]),
    },
    {
      title: "Discografia",
      text: "Reunião de todos discos, singles e colaborações",
      description: `A Discografia reúne todos os discos, singles e colaborações de Vinícius Fernandes, apresentando uma visão abrangente de sua trajetória musical e artística. Através de uma seleção cuidadosa de faixas e projetos, a discografia reflete a evolução do artista ao longo dos anos, destacando suas experimentações sonoras e colaborações com outros músicos e artistas.
`,
      image: "/discografia_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/placeholder.jpg",
          title: "Discografia — imagem 1",
          caption: "Espaço reservado para a documentação do catálogo.",
        },
        {
          src: "/placeholder.jpg",
          title: "Discografia — imagem 2",
          caption: "Imagem de apoio para releases e álbuns.",
        },
        {
          src: "/placeholder.jpg",
          title: "Discografia — imagem 3",
          caption: "Registro complementar da reunião de trabalhos.",
        },
        {
          src: "/placeholder.jpg",
          title: "Discografia — imagem 4",
          caption: "Último item visual do bloco de discografia.",
        },
      ]),
      embedsBandcamp: [
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=965401561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds01-amador">[tds01] amador von Tabutril</a></iframe>`,
          "Lorem ipsum dolor sit amet.",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=2229382614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds09-fontanela">[tds09] Fontanela von Cassini</a></iframe>`,
          "Lorem ipsum dolor sit amet.",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1846535594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds013-muito-nasty">[tds013] Muito Nasty von Muito Nasty</a></iframe>`,
          "Lorem ipsum dolor sit amet.",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=981793339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://passaro-concreto.bandcamp.com/album/p-ssaro-concreto">Pássaro-Concreto von Pássaro-Concreto</a></iframe>`,
          "Lorem ipsum dolor sit amet.",
        ),
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
      images_details: buildImageDetails([
        {
          src: "/placeholder.jpg",
          title: "Menis — imagem 1",
          caption:
            "Espaço reservado para documentação de instrumentos eletrônicos.",
        },
        {
          src: "/placeholder.jpg",
          title: "Menis — imagem 2",
          caption: "Imagem de apoio para ferramentas de síntese embarcada.",
        },
        {
          src: "/placeholder.jpg",
          title: "Menis — imagem 3",
          caption:
            "Registro complementar do trabalho com hardware para artistas.",
        },
        {
          src: "/placeholder.jpg",
          title: "Menis — imagem 4",
          caption: "Último placeholder do conjunto Menis.",
        },
      ]),
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
      images_details: buildImageDetails([
        {
          src: "/placeholder.jpg",
          title: "UOL — imagem 1",
          caption:
            "Espaço reservado para documentação do trabalho em backend e frontend.",
        },
        {
          src: "/placeholder.jpg",
          title: "UOL — imagem 2",
          caption: "Imagem de apoio relacionada às integrações de sistemas.",
        },
        {
          src: "/placeholder.jpg",
          title: "UOL — imagem 3",
          caption: "Registro complementar do desenvolvimento para o portal.",
        },
        {
          src: "/placeholder.jpg",
          title: "UOL — imagem 4",
          caption: "Último placeholder do bloco UOL.",
        },
      ]),
    },
    {
      title: "Nexo Jornal",
      text: "Atualização de stack, integração de dados e desenvolvimento de novas funcionalidades para o portal de notícias.",
      description: `No Nexo Jornal, trabalhei na atualização da stack tecnológica, integração de dados e desenvolvimento de novas funcionalidades para o portal de notícias. Meu foco foi garantir a escalabilidade e a performance do sistema, além de implementar melhorias na experiência do usuário.`,
      image: "/nexo_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/placeholder.jpg",
          title: "Nexo Jornal — imagem 1",
          caption:
            "Espaço reservado para documentação da atualização de stack.",
        },
        {
          src: "/placeholder.jpg",
          title: "Nexo Jornal — imagem 2",
          caption:
            "Imagem de apoio para integração de dados e funcionalidades.",
        },
        {
          src: "/placeholder.jpg",
          title: "Nexo Jornal — imagem 3",
          caption: "Registro complementar do portal de notícias.",
        },
        {
          src: "/placeholder.jpg",
          title: "Nexo Jornal — imagem 4",
          caption: "Último placeholder do bloco Nexo Jornal.",
        },
      ]),
    },
  ];

  // nova coleção: Pesquisa & Publicações
  const publicationCards = [
    {
      title: "Cut-Up as Political Practice",
      text: "Artigo para a revista Norient analisando o cut-up de Burroughs como prática política contra manipulação midiática.",
      description: `O artigo explora as técnicas de cut-up de William Burroughs e sua aplicação como uma forma de resistência contra a manipulação midiática. Através da análise de obras específicas, discute-se como o cut-up pode ser visto como uma prática política que desafia narrativas dominantes e promove uma nova forma de expressão artística.`,
      image: "/cutup_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/placeholder.jpg",
          title: "Cut-Up as Political Practice — imagem 1",
          caption:
            "Espaço reservado para material visual do artigo na Norient.",
        },
        {
          src: "/placeholder.jpg",
          title: "Cut-Up as Political Practice — imagem 2",
          caption: "Imagem de apoio da pesquisa sobre Burroughs.",
        },
        {
          src: "/placeholder.jpg",
          title: "Cut-Up as Political Practice — imagem 3",
          caption: "Registro complementar da prática de cut-up.",
        },
        {
          src: "/placeholder.jpg",
          title: "Cut-Up as Political Practice — imagem 4",
          caption: "Último placeholder do artigo para futura substituição.",
        },
      ]),
    },
    {
      title:
        "A Emergência do Sujeito na Narrativa do Prelúdio Op. 28 no. 14 de Chopin",
      text: "Artigo publicado na revista Musica Theorica",
      description: `O artigo investiga a emergência do sujeito na narrativa do Prelúdio Op. 28 no. 14 de Chopin, analisando como elementos musicais e estruturais contribuem para a construção da subjetividade na obra. Através de uma abordagem interdisciplinar, busca-se compreender as implicações estéticas e filosóficas dessa narrativa musical.`,
      image: "/chopin_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/placeholder.jpg",
          title: "Chopin — imagem 1",
          caption:
            "Espaço reservado para documentação do artigo publicado na Musica Theorica.",
        },
        {
          src: "/placeholder.jpg",
          title: "Chopin — imagem 2",
          caption: "Imagem de apoio para a análise do Prelúdio Op. 28 no. 14.",
        },
        {
          src: "/placeholder.jpg",
          title: "Chopin — imagem 3",
          caption: "Registro complementar da pesquisa musicológica.",
        },
        {
          src: "/placeholder.jpg",
          title: "Chopin — imagem 4",
          caption: "Último placeholder do bloco dedicado a Chopin.",
        },
      ]),
    },
    {
      title:
        "The medium becomes infected by the message: Boris Groys' submedial suspicion as viral tropes in William Burroughs.",
      text: "Análise das cut-ups de Burroughs via Groys, apresentada e publicada nos proceedings da Sonologia 2019.",
      description: `O artigo analisa as cut-ups de William Burroughs à luz das ideias de Boris Groys, discutindo como as práticas artísticas contemporâneas podem ser entendidas através da noção de "suspensão submedial". A pesquisa foi apresentada e publicada nos proceedings da Sonologia 2019.`,
      image: "/sonologia_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/placeholder.jpg",
          title: "Groys / Burroughs — imagem 1",
          caption:
            "Espaço reservado para documentação dos proceedings da Sonologia 2019.",
        },
        {
          src: "/placeholder.jpg",
          title: "Groys / Burroughs — imagem 2",
          caption: "Imagem de apoio para a análise dos tropos virais.",
        },
        {
          src: "/placeholder.jpg",
          title: "Groys / Burroughs — imagem 3",
          caption: "Registro complementar da apresentação acadêmica.",
        },
        {
          src: "/placeholder.jpg",
          title: "Groys / Burroughs — imagem 4",
          caption: "Último placeholder do conjunto de pesquisa.",
        },
      ]),
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
          img?.caption ||
          currentItem.caption ||
          "Lorem ispsum, São Paulo (2026)",
      }))
    : cardsWithSlug.slice(0, 5).map((it) => ({
        title: it.title,
        caption: it.text || it.description || it.caption,
      }));

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
    const url = `/item/${slug}`;
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
              imageItems={highlightImageItems}
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
                <p>{currentItem.description}</p>
              ) : null}
              {currentItem.linkUrl ? (
                <div className="detail-link-row detail-link-row--hero">
                  <a
                    className="detail-link detail-hero-link"
                    href={currentItem.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {currentItem.linkTitle || currentItem.linkUrl}{" "}
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
