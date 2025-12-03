function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const cards = [
  {
    title: { "pt-br": "Obra / Projeto 1", en: "Work / Project 1", de: "Werk / Projekt 1" },
    text: { "pt-br": "Descrição curtinha, ano, contexto.", en: "Short description, year, context.", de: "Kurze Beschreibung, Jahr, Kontext." },
    image: "/vinicius.jpg", // <-- thumb/teaser
  },
  {
    title: { "pt-br": "Obra / Projeto 2", en: "Work / Project 2", de: "Werk / Projekt 2" },
    text: { "pt-br": "Instalação sonora apresentada na USP.", en: "Sound installation presented at USP.", de: "Klanginstallation präsentiert an der USP." },
    image: "/cut.jpeg",
  },
  {
    title: { "pt-br": "Obra / Projeto 3", en: "Work / Project 3", de: "Werk / Projekt 3" },
    text: { "pt-br": "Performance colaborativa.", en: "Collaborative performance.", de: "Kollaborative Aufführung." },
    image: "/vinicius.jpg",
  },
  {
    title: { "pt-br": "Obra / Projeto 4", en: "Work / Project 4", de: "Werk / Projekt 4" },
    text: { "pt-br": "Outro trabalho aqui.", en: "Another work here.", de: "Eine weitere Arbeit hier." },
    image: "/cut.jpeg",
  },
];

export const techCards = [
  {
    title: { "pt-br": "Menis – Synths & Pedais", en: "Menis – Synths & Pedals", de: "Menis – Synths & Pedale" },
    text: {
      "pt-br": "Marca própria de instrumentos, pedais e módulos de síntese, com foco em experimentação sonora e acessibilidade.",
      en: "Own brand of instruments, pedals and synthesis modules focusing on sonic experimentation and accessibility.",
      de: "Eigene Marke von Instrumenten, Pedalen und Synthesemodulen mit Fokus auf Klangexperiment und Barrierefreiheit.",
    },
    image: "/vinicius.jpg",
  },
  {
    title: { "pt-br": "Dub Siren / Dub Tools", en: "Dub Siren / Dub Tools", de: "Dub Sirene / Dub Tools" },
    text: {
      "pt-br": "Placas dedicadas para dub, sirenes, delays e explorações de feedback em performance ao vivo.",
      en: "Boards dedicated to dub, sirens, delays and feedback explorations in live performance.",
      de: "Platten für Dub, Sirenen, Delays und Feedback-Experimente in Live-Performances.",
    },
    image: "/vinicius.jpg",
  },
  {
    title: { "pt-br": "ESP32 & DaisySP", en: "ESP32 & DaisySP", de: "ESP32 & DaisySP" },
    text: {
      "pt-br": "Projetos de áudio embarcado usando ESP32, Daisy e bibliotecas abertas para síntese e processamento digital de sinais.",
      en: "Embedded audio projects using ESP32, Daisy and open libraries for synthesis and DSP.",
      de: "Eingebettete Audio-Projekte mit ESP32, Daisy und offenen Bibliotheken für Synthese und DSP.",
    },
    image: "/vinicius.jpg",
  },
  { title: { "pt-br": "Modular Patch A", en: "Modular Patch A", de: "Modular Patch A" }, text: { "pt-br": "Experimentos com patches modulares e feedback controlado em instalação.", en: "Experiments with modular patches and controlled feedback in installations.", de: "Experimente mit modularen Patches und kontrolliertem Feedback in Installationen." }, image: "/vinicius.jpg" },
  { title: { "pt-br": "Pedal Prototype", en: "Pedal Prototype", de: "Pedal-Prototyp" }, text: { "pt-br": "Protótipo de pedal de delay com circuito híbrido analógico/digital.", en: "Delay pedal prototype with hybrid analog/digital circuitry.", de: "Delay-Pedal-Prototyp mit hybridem Analog-/Digital-Schaltkreis." }, image: "/vinicius.jpg" },
  { title: { "pt-br": "Live Set – 2018", en: "Live Set – 2018", de: "Live Set – 2018" }, text: { "pt-br": "Conjunto de performances ao vivo usando circuit bending e síntese granular.", en: "Series of live performances using circuit bending and granular synthesis.", de: "Live-Performances mit Circuit-Bending und Granularsynthese." }, image: "/vinicius.jpg" },
];

export const softwareCards = [
  { title: { "pt-br": "Desenvolvimento Web", en: "Web Development", de: "Web-Entwicklung" }, text: { "pt-br": "Experiência com JavaScript, TypeScript, Node.js, React, Next.js, Docker, AWS e outras tecnologias, em empresas como UOL.", en: "Experience with JavaScript, TypeScript, Node.js, React, Next.js, Docker, AWS and other technologies, at companies like UOL.", de: "Erfahrung mit JavaScript, TypeScript, Node.js, React, Next.js, Docker, AWS und anderen Technologien, bei Unternehmen wie UOL." }, image: "/cut.jpeg" },
  { title: { "pt-br": "Ferramentas para Artistas", en: "Tools for Artists", de: "Werkzeuge für Künstler" }, text: { "pt-br": "Pequenos apps, patches e sistemas que facilitam a criação sonora, a performance e o ensino de computação musical.", en: "Small apps, patches and systems that facilitate sound creation, performance and teaching of music computing.", de: "Kleine Apps, Patches und Systeme zur Unterstützung von Klangschöpfung, Performance und Lehre der Musikinformatik." }, image: "/cut.jpeg" },
  { title: { "pt-br": "Patch Builder", en: "Patch Builder", de: "Patch Builder" }, text: { "pt-br": "Uma pequena ferramenta para construir patches modulares em browser.", en: "A small tool to build modular patches in the browser.", de: "Ein kleines Tool zum Erstellen modularer Patches im Browser." }, image: "/cut.jpeg" },
  { title: { "pt-br": "Visualizer", en: "Visualizer", de: "Visualizer" }, text: { "pt-br": "Experimentos com visualização reativa para performance sonora.", en: "Experiments with reactive visualization for sound performance.", de: "Experimente mit reaktiver Visualisierung für Klangperformances." }, image: "/cut.jpeg" },
];

export const allItems = [
  ...cards.map((c) => ({ ...c, slug: slugify(typeof c.title === "string" ? c.title : c.title["pt-br"]), section: "art" })),
  ...techCards.map((c) => ({ ...c, slug: slugify(typeof c.title === "string" ? c.title : c.title["pt-br"]), section: "tech" })),
  ...softwareCards.map((c) => ({ ...c, slug: slugify(typeof c.title === "string" ? c.title : c.title["pt-br"]), section: "software" })),
];
