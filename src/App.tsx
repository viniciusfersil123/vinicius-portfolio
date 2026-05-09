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
          caption:
            "Planos de Saturação — performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
          y: "-54%",
          y900: "-80%",
          x600: "-15%",
        },
        {
          src: "/musica_3.jpg",
          title: "Denis Abranches e Alessandra Bono Vox",
          caption:
            "Duo Movente — performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
          y: "-75%",
          x600: "-30%",
        },
        {
          src: "/musica_4.jpg",
          title: "¿Música? 13",
          caption:
            "Público durante a 13ª edição da série ¿Música?, São Paulo - SP, Brasil - 2017",
          y: "-60%",
        },
        {
          src: "/musica_5.jpg",
          title: "Henrique Rocha",
          caption:
            "Ainda, Performance em ¿Música? #13, São Paulo - SP, Brasil - 2017",
        },
      ]),
      linkUrl: "https://nusom.eca.usp.br/producoes-musica",
      linkTitle: "Saiba mais",
    },
    {
      title: "Móbile de vaca morta com vergalhões [...]",
      text: "Instalação com ossos, alto-falantes, vergalhões de ferro e com áudio de álbuns kitsch de Augusto Piccinini",
      description: `Móbile de vaca morta com vergalhões de ferro e frases de auto-ajuda narradas por vozes sintetizadas intercaladas à canções motivacionais com timbres maneiros é uma instalação na qual seis alto-falantes são instalados diretamente sobre ossos bovinos, em posições sugeridas pela própria estrutura óssea do animal. O sistema reproduz simultaneamente, em baixo volume, os álbuns de Augusto Piccinini “Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas”, “Igual ao álbum anterior mas desta vez mais radical e mais profundo” e “Just like the last two albums but this time in english in order to appeal to international audiences”. A instalação combina restos biológicos e materiais descartados na construção de uma estrutura sonora precária, situada entre decomposição e reconstrução. O trabalho cria um contraste entre essa materialidade desgastada e um universo sonoro marcado por frases motivacionais, timbres MIDI e excesso de informação. A obra propõe uma reflexão sobre formas de produção cultural que transformam ansiedade, desgaste e frustração em entretenimento, consumo e estímulo constante. A instalação foi concebida por Vinícius Fernandes em parceria com Augusto Piccinini e João Mascaro.
`,
      image: "/mobile_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/mobile_1.jpg",
          title: "Registro da Instalação",
          caption:
            "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
        },
        {
          src: "/mobile_2.jpg",
          title: "Registro da Instalação",
          caption:
            "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
          y: "-50%",
        },
        {
          src: "/mobile_3.jpg",
          title: "Registro da Instalação",
          caption:
            "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019",
          y: "-30%",
          x600: "50%",
        },
        {
          src: "/mobile_4.jpg",
          title: "Registro da Instalação",
          caption:
            "Espaço das Artes, Universidade de São Paulo - SP, Brasil - 2019.",
          y: "-70%",
        },
      ]),
      linkTitle: "Saiba mais",
      linkUrl:
        "https://revistapesquisa.fapesp.br/na-onda-da-musica-e-da-tecnologia/",
      embedsBandcamp: [
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=743014755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://3edgy5u.bandcamp.com/album/v-rios-midis-maneiros-com-timbres-mais-maneiros-ainda-intercalados-com-frases-de-auto-ajuda-narradas-por-vozes-sintetizadas">Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas von 3edgy5u</a></iframe>`,
          "Album - Vários MIDIs maneiros com timbres mais maneiros ainda intercalados com frases de auto-ajuda narradas por vozes sintetizadas - Augusto Piccinini",
        ),
      ],
    },

    {
      title: "Fitosintetizador",
      text: "Instalação sonora interativa que utiliza plantas como controladoras de síntese sonora.",
      description: `O “Fitosintetizador” é uma instalação sonora interativa que utiliza o perfil de cores de folhas e plantas para gerar composições em um piano digital. Por meio de processamento de imagem e análise cromática, diferentes tonalidades e padrões vegetais são convertidos em informações musicais, criando paisagens sonoras variáveis a partir das características visuais das plantas. A obra convida o público a trazer folhas e interagir livremente com o sistema, permitindo diferentes formas de experimentação e composição sonora. O trabalho explora relações entre natureza, tecnologia e interação, transformando elementos vegetais em interfaces musicais e deslocando noções tradicionais de instrumento, autoria e performance. O projeto foi concebido por Vinícius Fernandes em parceria com Lidia Ganhito, Gabriel Urazaki e Vitor Barão durante uma residência artística na Red Bull Station, onde um primeiro protótipo foi apresentado, e posteriormente exibido em sua versão completa no Sesc Avenida Paulista.
`,
      image: "/fitosintetizador_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/fitosintetizador_1.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
        },
        {
          src: "/fitosintetizador_2.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          y: "-70%",
        },
        {
          src: "/fitosintetizador_3.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          y: "-60%",
        },
        {
          src: "/fitosintetizador_4.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
          y: "-10%",
        },
        {
          src: "/fitosintetizador_5.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
        },
        {
          src: "/fitosintetizador_6.jpg",
          title: "Registro da Instalação",
          caption: "SESC Avenida Paulista, São Paulo - SP, Brasil - 2020",
        },
      ]),
      youtubeUrls: ["https://www.youtube.com/watch?v=APvD8IhDLcA"],
      youtubeCaption: ["Fitosintetizador — amostra de funcionamento do patch"],
    },
    {
      title: "Echos of the deep",
      text: "Software de sonificação de dados metabólicos de esponjas marinhas",
      description: `Echoes of the Deep: Sonifying the Hidden World of Sponges é um projeto interdisciplinar de arte e ciência desenvolvido por Julie Semoroz e Vinícius Fernandes em colaboração com pesquisadores do CNRS e da Marine Station of Endoume. Baseado em pesquisas metabolômicas, genéticas e taxonômicas sobre esponjas marinhas do Mediterrâneo e do Atlântico, o projeto transforma dados científicos em experiências imersivas de som e vibração por meio de um sistema de sonificação desenvolvido em Python e Pure Data. Dados de concentração química extraídos de heatmaps metabolômicos são convertidos em frequências e sintetizados em formas de onda complexas, gerando “assinaturas sonoras” únicas para oito espécies de esponjas. Essas identidades auditivas revelam similaridades e diferenças bioquímicas entre espécies, tornando perceptíveis aspectos invisíveis da biodiversidade marinha através da escuta e da vibração corporal. Ao combinar processamento digital de sinais, arte sonora experimental e biologia marinha, a obra propõe uma forma alternativa de visualização científica e engajamento público, buscando ampliar a conscientização sobre ecossistemas subaquáticos ameaçados pelas mudanças climáticas, perda de biodiversidade e ondas extremas de calor marinho.`,
      image: "/sponges_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/sea_sponges_1.JPG",
          title:
            "Vinícius Fernandes e Julie Semoroz durante a apresentação de Echoes of the Deep",
          caption:
            "World Sponge Conference 2025, Vila do Conde, Portugal - 2025",
          y: "-80%",
        },
      ]),
      linkUrl: "https://worldspongecommunity.com/program/",
      linkTitle: "Saiba mais",
    },
    {
      title: "Discografia",
      text: "Reunião de todos discos, singles e colaborações",
      description: `A Discografia reúne todos os discos, singles e colaborações de Vinícius Fernandes, apresentando uma visão abrangente de sua trajetória musical e artística. Através de uma seleção cuidadosa de faixas e projetos, a discografia reflete a evolução do artista ao longo dos anos, destacando suas experimentações sonoras e colaborações com outros músicos e artistas.
`,
      image: "/discografia_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/discografia_1.jpg",
          title: "Tabutril",
          caption: "Bar do Zé, Campinas - SP, Brasil - 2015",
          y: "-50%",
        },
        {
          src: "/discografia_2.jpg",
          title: "Cassini",
          caption: " Bolderaja, Riga, Letônia - 2018",
        },
        {
          src: "/discografia_3.jpg",
          title: "Muito Nasty",
          caption: "Fauhaus, São Paulo - SP, Brasil - 2018",
          y: "-20%",
        },
        {
          src: "/discografia_4.jpg",
          title: "Pássaro-Concreto",
          caption: "Casa das Rosas, São Paulo - SP, Brasil - 2016",
          y: "-70%",
        },
      ]),
      embedsBandcamp: [
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=965401561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds01-amador">[tds01] amador von Tabutril</a></iframe>`,
          "Amador - 2015 - Tabutril",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=2229382614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds09-fontanela">[tds09] Fontanela von Cassini</a></iframe>`,
          "Fontanela - 2018 - Cassini",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1846535594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://tudos.bandcamp.com/album/tds013-muito-nasty">[tds013] Muito Nasty von Muito Nasty</a></iframe>`,
          "Muito Nasty - 2018 - Muito Nasty",
        ),
        buildBandcampEmbed(
          `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=981793339/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://passaro-concreto.bandcamp.com/album/p-ssaro-concreto">Pássaro-Concreto von Pássaro-Concreto</a></iframe>`,
          "Pássaro-Concreto - 2016 - Pássaro-Concreto",
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
      description: `UOL é uma das maiores empresas brasileiras de tecnologia, mídia e serviços digitais, responsável pelo maior portal de conteúdo em língua portuguesa do Brasil, com milhões de usuários mensais e atuação em áreas como jornalismo digital, streaming, cloud computing, hospedagem e pagamentos online. Durante sua atuação como engenheiro de software na empresa, Vinícius Fernandes trabalhou no desenvolvimento e manutenção de aplicações web utilizando tecnologias como JavaScript, TypeScript, Vue.js, Node.js, Docker e SCSS, atuando em arquiteturas de microsserviços e no desenvolvimento de interfaces e sistemas escaláveis para plataformas de grande alcance. Seu trabalho envolveu integração entre equipes multidisciplinares, otimização de aplicações e desenvolvimento de soluções para ambientes de alta demanda e grande volume de acesso.`,
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
    },
    {
      title: "Nexo Jornal",
      text: "Atualização de stack, integração de dados e desenvolvimento de novas funcionalidades para o portal de notícias.",
      description: `Nexo Jornal é um veículo brasileiro de jornalismo digital independente reconhecido por sua abordagem analítica e contextualizada sobre política, economia, cultura, ciência e tecnologia. Fundado em 2015 em São Paulo, o Nexo se destacou internacionalmente por seu foco em jornalismo visual, experiência digital e modelos independentes de financiamento baseados em assinatura. Durante sua atuação no jornal, Vinícius Fernandes trabalhou como desenvolvedor e Product Owner, desenvolvendo aplicações web com React.js, Next.js, JavaScript e TypeScript, além de atuar com CSS, Styled-components e integração de serviços em nuvem via AWS. Seu trabalho envolveu desenvolvimento front-end, design de interfaces responsivas, revisão de código, colaboração em equipes multidisciplinares e criação de soluções digitais voltadas à experiência editorial e à distribuição de conteúdo em uma das principais iniciativas de jornalismo digital independente do Brasil.`,
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
    },
  ];

  // nova coleção: Pesquisa & Publicações
  const publicationCards = [
    {
      title: "Cut-Up as Political Practice",
      text: "Artigo para a revista Norient analisando o cut-up de Burroughs como prática política contra manipulação midiática.",
      description: `O artigo Cut-Up as Political Practice, publicado pela Norient em 2020, investiga a técnica de cut-up desenvolvida por William S. Burroughs como uma prática estética e política relacionada à manipulação de signos, mídia e percepção. No texto, Vinícius Fernandes analisa como os experimentos de Burroughs com fragmentação, recombinação e deformação de textos e fitas magnéticas anteciparam fenômenos contemporâneos ligados à manipulação algorítmica da informação, como o escândalo Cambridge Analytica e o uso de dados para propaganda política direcionada. A partir de referências em teoria da mídia, estudos do som e crítica cultural, o artigo discute como técnicas de sampling e edição sonora podem revelar as estruturas materiais e ideológicas ocultas por trás da aparente normalidade dos meios de comunicação. O texto propõe o cut-up não apenas como procedimento artístico experimental, mas como ferramenta crítica capaz de suspender a “normalidade semiótica” dos ambientes midiáticos e tornar perceptíveis os mecanismos de controle, poder e produção de subjetividade presentes nas tecnologias contemporâneas.`,
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
    },
    {
      title:
        "A Emergência do Sujeito na Narrativa do Prelúdio Op. 28 no. 14 de Chopin",
      text: "_",
      description: `O artigo A Emergência do Sujeito na Narrativa do Prelúdio Op. 28 nº 14 de Chopin, publicado na revista acadêmica Associação Brasileira de Teoria e Análise Musical, investiga o prelúdio de Frédéric Chopin a partir das teorias de narratividade musical de Byron Almén, Eero Tarasti e da semiótica estrutural de Greimas. Escrito por Vinícius Fernandes, Guto Brambilla e Fernando Iazzetta, o trabalho propõe uma leitura da peça como uma polifonia latente construída pela tensão entre duas vozes interdependentes: uma linha melódica que busca autonomia e um baixo que exerce uma força integradora. A análise demonstra como o conflito entre essas isotopias musicais estrutura uma narrativa de individuação e emergência do sujeito, associada às questões centrais da poética romântica do século XIX, como singularidade, subjetividade e ruptura com ordens hierárquicas estáveis. Ao articular análise musical, semiótica e teoria da narratividade, o artigo propõe uma abordagem interdisciplinar para compreender a música não apenas como organização formal de sons, mas como estrutura expressiva capaz de incorporar conflitos simbólicos, psicológicos e culturais.`,
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
    },
    {
      title:
        "The medium becomes infected by the message[...]",
      text: "_",
      description: `O artigo The Medium Becomes Infected by the Message: Boris Groys’ Submedial Suspicion as Viral Tropes in William Burroughs, escrito por Vinícius Fernandes, investiga as relações entre teoria da mídia, som experimental e linguagem a partir da aproximação entre a filosofia de Boris Groys e os experimentos de cut-up realizados por William S. Burroughs com fitas magnéticas nas décadas de 1960 e 1970. O texto analisa como as manipulações sonoras de Burroughs — baseadas em cortes, recombinações, deformações e danos físicos aplicados ao suporte fonográfico — operam como estratégias para revelar aquilo que Groys denomina “suspeita submedial”: a existência de uma subjetividade oculta que atua por trás dos meios de comunicação e da circulação dos signos. A partir da ideia burroughsiana de que a linguagem funciona como um “vírus” que coloniza o pensamento humano, o artigo argumenta que as técnicas de cut-up produzem uma erosão da coerência semântica e expõem a materialidade do meio sonoro, suspendendo temporariamente a normalidade da linguagem. Dialogando com autores como Friedrich Kittler, Roland Barthes e Fernando Iazzetta, o trabalho propõe uma leitura crítica das tecnologias de gravação sonora como dispositivos capazes tanto de reforçar mecanismos de controle quanto de produzir rupturas perceptivas e políticas através do ruído, da distorção e da manipulação material dos sinais.`,
      image: "/sonologia_thumb.jpg",
      images_details: buildImageDetails([
        {
          src: "/sonologia_01.png",
          title: "_",
          caption:
            "_",
            y: "-90%",
        },
      ]),
      linkUrl:"https://sonologia2019.eca.usp.br/?page_id=1469",
      linkTitle: "Leia o artigo na íntegra aqui",
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
