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
        src: "https://www.linkedin.com/in/carlossendragisbert/",
        svg: "/linkedin.svg"
      },
      {
        title:"Behance",
        src: "https://www.behance.net/cmg2512ead2",
        svg: "/behance.svg"
      }
    ] 
  }

export function About() {
    return (
        <section className="section" id="sobre-mi">
        <div className="section_wrapper">
          <h2 className="section_title">{aboutData.title}</h2>
          <div className="about_avatar"><img src={aboutData.avatar} alt="Imagen de Carlos Sendra Gisbert" /></div>
          <div className="about_description" dangerouslySetInnerHTML={aboutData.description}></div>
          <div className="divider"></div>
          <div className="links_list">
            {aboutData.links.map((link, index) => (
              <div className="link_item" key={index}>
                <a href={link.src} className="hover-me"><img className="link_item_img" src={link.svg} alt={link.title} />{link.title}</a>
              </div>
            ))}
          </div>
        </div>
      </section>)
}