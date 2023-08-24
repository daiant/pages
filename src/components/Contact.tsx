export function Contact() {
  const links = [
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
      title: "Behance",
      src: "https://www.behance.net/cmg2512ead2",
      svg: "/behance.svg"
    }
  ]
  return (
    <section className="section" id="contact">
      <div className="section-wrapper">
        <h2 className="section_title">¿Te he convencido?</h2>
        <div className="contact_wrapper">
          <p>Envíame un correo a <a href="mailto:cmg2512@gmail.com" className="hover-me"><span className="underline">hola@daiant.es</span></a></p>
          <p>Háblame por whatsapp en <a href="http://wa.me/343620957214" className="hover-me"><span className="underline">+34 620 95 72 14</span></a></p>
          <div className="links_list">
            {links.map((link, index) => (
              <div className="link_item" key={index}>
                <a href={link.src} className="hover-me"><img className="link_item_img" src={"/pages" + link.svg} alt={link.title} />{link.title}</a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}