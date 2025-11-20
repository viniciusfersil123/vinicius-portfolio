function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const cards = [
  { title: "Obra / Projeto 1", text: "Descrição curtinha, ano, contexto." },
  { title: "Obra / Projeto 2", text: "Instalação sonora apresentada na USP." },
  { title: "Obra / Projeto 3", text: "Performance colaborativa." },
  { title: "Obra / Projeto 4", text: "Outro trabalho aqui." },
];

export const techCards = [
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
  { title: "Modular Patch A", text: "Experimentos com patches modulares e feedback controlado em instalação." },
  { title: "Pedal Prototype", text: "Protótipo de pedal de delay com circuito híbrido analógico/digital." },
  { title: "Live Set – 2018", text: "Conjunto de performances ao vivo usando circuit bending e síntese granular." },
];

export const softwareCards = [
  {
    title: "Desenvolvimento Web",
    text: "Experiência com JavaScript, TypeScript, Node.js, React, Next.js, Docker, AWS e outras tecnologias, em empresas como UOL.",
  },
  { title: "Ferramentas para Artistas", text: "Pequenos apps, patches e sistemas que facilitam a criação sonora, a performance e o ensino de computação musical." },
  { title: "Patch Builder", text: "Uma pequena ferramenta para construir patches modulares em browser." },
  { title: "Visualizer", text: "Experimentos com visualização reativa para performance sonora." },
];

export const allItems = [
  ...cards.map((c) => ({ ...c, slug: slugify(c.title), section: "art" })),
  ...techCards.map((c) => ({ ...c, slug: slugify(c.title), section: "tech" })),
  ...softwareCards.map((c) => ({ ...c, slug: slugify(c.title), section: "software" })),
];
