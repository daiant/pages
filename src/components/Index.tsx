export function Index() {
  const welcomeContent = {
    title: "",
    description: "Soy un desarrollador web de Valencia, España. Siempre busco aprender nuevas tecnologías, y estoy abierto a toda clase de oportunidades.",
    button: "Habla conmigo",
  }
  const goto = (link: string) => {
    let element = document.getElementById(link);
    if (element) {
      element.scrollIntoView();
    }
  }
  return (<>
    <section className="section blue" id="index">
      <div className="section_wrapper">
        <div className="welcome_wrapper">
          <h1 className="welcome_title"><span className="welcome_name" id="scrollable_name">Carlos</span></h1>
          <p>{welcomeContent.description}</p>
          <div className="button_wrapper">
            <button className="welcome_button hover-me" onClick={() => goto("projects")}>Mis proyectos</button>
            <button className="welcome_button hover-me invert" onClick={() => goto("contact")}>{welcomeContent.button}</button>
          </div>
        </div>
      </div>
    </section>
  </>)
}