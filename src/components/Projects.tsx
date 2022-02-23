class Repo {
    cover: string; 
    title: string;
    description: string; 
    link: string; 
    related: {title: string, content: string}[];
    
    constructor(cover: string, title: string, description: string, link: string, related: {title: string, content: string}[]) {
        this.cover = cover;
        this.title = title; 
        this.description = description;
        this.link = link;
        this.related = related;
    }
}
export function Projects() {

    const projects = [
        new Repo("/tara.png", "Tara Movies", "Aplicación de Streaming de películas independientes y difíciles de encontrar.", 
                   "https://github.com/Tara-Software/tara-movies", [{title: "Behance", content: "https://www.behance.net/gallery/137875131/Tara-Movies"}, {title: "Github", content: "https://github.com/Tara-Software/tara-movies"}]),
        new Repo("/zara.png", "Lo de Zara", "Repositorio de toda la ropa de diferentes marcas con compras InApp.", "www.google.com", []),
        new Repo("/pages.png", "Portfolio", "Landing Page que resume los proyectos en los que he estado involucrado.", "https://github.com/daiant", [{title: "Github", content: "https://github.com/daiant"}])
    ]    

    return (<>
        <section className="section" id="proyectos">
            <div className="section_wrapper">
                <h2 className="section_title">Mis proyectos</h2>
                <div className="projects_wrapper">
                    {
                        projects.map((project: Repo, index: number) => {
                            return (
                                <div key={index.toString()} className="project hover-me">
                                    <a href={project.link}>
                                    <h3 className="title">{project.title}</h3>
                                    <img src={project.cover} />
                                    
                                    <div className="description">{project.description}</div>
                                    
                                    </a>
                                    <div className="related_contents" style={{display: (project.related.length > 0) ? "block" : "none"}}>
                                        <h4>Más información:</h4>
                                        {project.related.map((related: {title: string, content: string}) => {
                                            return <div className="content hover-me" key={related.title}>
                                                <span>·<a href={related.content} className="hover-me">{related.title}</a></span>
                                            </div>
                                        })}
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>  
        </section>
    </>)
}