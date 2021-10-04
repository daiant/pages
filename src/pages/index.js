import * as React from 'react'
import '../styles/main.css'

const Index = () => {
  const [nav, setNav] = React.useState(false); // cambiar
  const [visible, setVisible] = React.useState(true);
  const [repositories, setRepositories] = React.useState([]);
  React.useEffect(() => {
    getRepos(repos).then(data => {
      setRepositories(data);
    });

  }, [])
  function getRepos(data) {
    return Promise.all(repos.map((repo) => {
      return fetch('https://api.github.com/repos/' + repo.repo)
      .then(response => response.json())
      .then(data => { return {cover: repo.cover, repo: data}});
    }));
  }
  const welcomeContent =  {
    title: "¡Hola! Soy ",
    description: "Soy un desarrollador web de Valencia, España. Siempre busco aprender nuevas tecnologías, y estoy abierto a toda clase de oportunidades.",
    button: "Habla conmigo",
  }
  const solutionData = [
    {
      title: "Revisión de portales",
      svg: "/revisiones.svg",
      description: "¿Crees que a tu página le falta algo?¿Ese toque especial?"
    }, 
    {
      title: "Diseño de páginas web",
      svg: "/webdesign.svg",
      description: "Encuentra la mejor manera de destacar tu producto: ¡con una página bonita!"
    },
    {
      title: "Creación de una aplicación web",
      svg: "/webapp.svg",
      description: "Crea la página ideal para ti, tu comercio o empresa."
    },
    {
      title: "Creación y mantenimiento de servidores",
      svg: "/backend.svg",
      description: "Olvídate de la parte difícil de internet, ya me encargo yo."
    },
    {
      title: "SEO y SEM",
      svg: "/seo.svg",
      description: "Consigue ser el primero en lo tuyo, conmigo."
    }
  ];
  const repos = [
    {
      repo: "daiant/landys",
      cover: "/landys.jpg",
    },
    {
      repo: "daiant/landys",
      cover: "/landys.jpg",
    }
  ];
  const aboutData = {
    title: "Sobre mí",
    avatar: "https://github.com/daiant.png",
    description: {__html: "<p>Soy Carlos Sendra Gisbert, un recién licenciado que intenta hacerse un hueco en el mundo del desarrollo web. </p>\
                          <p>Mi objetivo es crear de la web un espacio amigable, moderno y mucho más bonito de lo que está ahora.</p>\
                          <p>Me especializo en React, NextJS y NodeJS, aunque siempre estoy dispuesto a aprender nuevas tecnologías!</p>"
                        },
    links: [
      {
        title: "Github",
        src: "https://github.com/daiant",
        svg: "/github.svg"
      },
      {
        title: "LinkedIn",
        src: "https://linkedin.com",
        svg: "/linkedin.svg"
      },
      {
        title:"Behance",
        src: "https://behance.net",
        svg: "/behance.svg"
      }
    ] 
  }

  const handleNavigation = (e) => {
    setTimeout(() => setNav(!nav), 10);
    document.getElementById("menu_checkbox").checked = !nav
  }
  const goto = (id) => {
    
    var element = document.getElementById(id)
    if(nav) {
      handleNavigation()
    }
    element.scrollIntoView();
  }
    return (
    <main className="main-content">
      <div className="header" style={{opacity: visible ? "1" : "0"}}>
        <div className="header-index">
          <span className="welcome-name header-name" onClick={() => goto("index")}>Carlos</span>
        </div>
        <nav className="navigation">
          <div id="webapp_cover" onClick={(e) => handleNavigation(e)} style={{filter: nav ? "invert(0)" : "invert(1)"}}>
            <div id="menu_button">
              <input type="checkbox" id="menu_checkbox"  />
              <label htmlFor="menu_checkbox" id="menu_label">
                <div id="menu_text_bar"></div>
              </label>
            </div>
          </div>
          <div className={nav ? "nav-list show": "nav-list"}>
            <div className="bg-nav"></div>
            <ul className={nav ? "ul-nav show-ul": "ul-nav"}>
              <li className="nav-item" onClick={() => goto("index")}>Inicio</li>
              <li className="nav-item" onClick={() => goto("soluciones")}>Soluciones</li>
              <li className="nav-item" onClick={() => goto("proyectos")}>Proyectos</li>
              <li className="nav-item" onClick={() => goto("sobre-mi")}>Sobre mí</li>
              <li className="nav-item" onClick={() => goto("contacto")}>Contacto</li>
            </ul>
          </div>
        </nav>
      </div>
      <section className="section blue" id="index">
        <div className="section-wrapper">
          <div className="welcome-wrapper">
            <h1 className="welcome-title">{welcomeContent.title}<span className="welcome-name" id="scrollable-name">Carlos.</span></h1>
            <div className="avatar">
              <img src={welcomeContent.avatar} />
            </div>
            <p>{welcomeContent.description}</p>
            <button onClick={() => goto("contacto")} className="welcome-button">{welcomeContent.button}</button>
          </div>
        </div>
      </section>      
      <section className="section" id="soluciones">
        <div className="section-wrapper">
          <h2 className="section-title">Te puedo ayudar con:</h2>
          <ul className="solution-list">
            {solutionData.map((solution, index) => (
              <li key={index} className="solution-item">
                <img className="solution-img" src={solution.svg} alt={solution.title} />
                <span className="solution-title">{solution.title}</span>
                <span className="solution-description">{solution.description}</span>
              </li>
            ))}
          </ul>
          
        </div>
      </section>
    
      <section className="section" id="proyectos">
        <div className="section-wrapper">
          <h2 className="section-title">Mis proyectos</h2>
          {repositories.map((data, index) => {
              return (
              <div key={index} className="work-wrapper">
                <a href={data.repo.html_url} target="_blank">                  
                  <img src={data.cover} alt={data.repo.name} />
                  <div className="work-data">
                    <h2 className="work-title">{data.repo.name}</h2>
                    <div className="work-hidden">
                      <span className="work-description">{data.repo.description}</span>
                      <span className="work-updated">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#fff" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/></svg>
                        {new Date(data.repo.updated_at).toLocaleDateString("es-ES")}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              )
          })}
        </div>  
      </section>
      <section className="section" id="sobre-mi">
        <div className="section-wrapper">
          <h2 className="section-title">{aboutData.title}</h2>
          <div className="about-avatar"><img src={aboutData.avatar} alt="Imagen de Carlo Sendra Gisbert" /></div>
          <div className="about-description" dangerouslySetInnerHTML={aboutData.description}></div>
          <div className="divider"></div>
          <div className="links-list">
            {aboutData.links.map((link, index) => (
              <div className="link-item" key={index}>
                <a href={link.src}><img className="link-item-img" src={link.svg} alt={link.title} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="contacto">
        <div className="section-wrapper">
          <h2>¿Te he convencido?</h2>
          <form>
            <div className="input-box">
              <label className="input-label" htmlFor="name">Nombre</label>
              <input className="input" type="text" id="name" placeholder="Introduce tu nombre..."></input></div>
            <div className="input-box">
              <label className="input-label" htmlFor="email">Correo electrónico</label>
              <input type="email" className="input" id="email" placeholder="Email de contacto..."></input></div>
            <div className="input-box">
              <label className="input-label" htmlFor="content">Mensaje</label>
              <textarea className="input" placeholder="Qué pasa, a ver"></textarea></div>
            <input type="submit" className="input submit-form" value="Enviar"></input>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Index;