import React from "react";
import "./App.css";

function App() {
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
              Profissional de áudio/DSP e desenvolvimento web, com atuação em arte sonora, síntese, sistemas embarcados e plataformas abertas de áudio.
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
           Vinícius Fernandes é artista, pesquisador e desenvolvedor, atuando desde 2014 em arte sonora, síntese, hardware musical e desenvolvimento de software. Sua trajetória inclui participação na 32ª Bienal de São Paulo, performances e apresentações em cidades como Berlim, Nápoles, Riga, Tallinn, Vilnius e Barcelona, além de projetos em instituições como SESC e Espaço das Artes (USP). É criador da Menis, dedicada a hardware e ferramentas de áudio, e também trabalhou como desenvolvedor web em empresas como UOL e Nexo Jornal.
Atualmente é doutorando em cotutela entre a USP (IME) e a TU Berlin, pesquisando áudio embarcado, DSP e plataformas abertas de áudio sob uma perspectiva crítica e situada.          </p>
          <p>
            Atualmente faço doutorado em áudio embarcado entre a USP e a TU Berlin, pesquisando
            plataformas abertas de áudio, acessibilidade tecnológica e práticas de desenvolvimento
            situadas — sempre em diálogo com arte sonora e práticas experimentais.
          </p>
        </section>

        {/* ART */}
        <section id="art" className="section">
          <h2>Art & Sound (Arquivo 2014–2019)</h2>
          <p>
            Uma seleção de trabalhos em performance, instalações sonoras e projetos colaborativos.
          </p>
          <div className="cards-grid">
            <article className="card">
              <h3>Obra / Projeto 1</h3>
              <p>Descrição curtinha do trabalho, ano, contexto, local.</p>
            </article>
            <article className="card">
              <h3>Obra / Projeto 2</h3>
              <p>Você depois pode puxar isso do seu portfólio antigo.</p>
            </article>
            <article className="card">
              <h3>Obra / Projeto 3</h3>
              <p>Outro exemplo de instalação, performance ou peça sonora.</p>
            </article>
          </div>
        </section>

        {/* TECH */}
        <section id="tech" className="section">
          <h2>Hardware & DSP</h2>
          <p>
            Desenvolvimento de instrumentos eletrônicos, síntese embarcada e ferramentas
            para artistas e pesquisadores.
          </p>
          <div className="cards-grid">
            <article className="card">
              <h3>Menis – Synths & Pedais</h3>
              <p>
                Marca própria de instrumentos, pedais e módulos de síntese, com foco em
                experimentação sonora e acessibilidade.
              </p>
            </article>
            <article className="card">
              <h3>Dub Siren / Dub Tools</h3>
              <p>
                Placas dedicadas para dub, sirenes, delays e explorações de feedback em 
                performance ao vivo.
              </p>
            </article>
            <article className="card">
              <h3>ESP32 & DaisySP</h3>
              <p>
                Projetos de áudio embarcado usando ESP32, Daisy e bibliotecas abertas 
                para síntese e processamento digital de sinais.
              </p>
            </article>
          </div>
        </section>

        {/* SOFTWARE */}
        <section id="software" className="section">
          <h2>Software & Web Development</h2>
          <p>
            Atuação como desenvolvedor web e criador de ferramentas digitais para áudio,
            arte e educação.
          </p>
          <div className="cards-grid">
            <article className="card">
              <h3>Desenvolvimento Web</h3>
              <p>
                Experiência com JavaScript, TypeScript, Node.js, React, Next.js, Docker, AWS 
                e outras tecnologias, em empresas como UOL.
              </p>
            </article>
            <article className="card">
              <h3>Ferramentas para Artistas</h3>
              <p>
                Pequenos apps, patches e sistemas que facilitam a criação sonora, a 
                performance e o ensino de computação musical.
              </p>
            </article>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="section">
          <h2>Pesquisa</h2>
          <p>
            Doutorado em áudio embarcado entre o Instituto de Matemática e Estatística da
            USP e a TU Berlin (Audio Communication Group), com foco em plataformas abertas,
            autonomia tecnológica e crítica das infraestruturas de desenvolvimento.
          </p>
          <p>
            Aqui você pode depois listar textos, apresentações, slides e projetos de
            pesquisa relacionados à sua tese e colaborações internacionais.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2>Contato</h2>
          <p>
            Quer conversar sobre um projeto, aula, colaboração ou consultoria técnica?
          </p>
          <ul>
            <li>E-mail: <a href="mailto:viniciusfersil@gmail.com">viniciusfersil@gmail.com</a></li>
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
