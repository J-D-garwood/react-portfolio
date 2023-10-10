export default function Project(project) {
    return (
        <div id="project_section" className="col-12 col-md-4">
                    <a href={project.link}>
                            <div id="project_link">
                                {project.title}
                            </div>
                    </a>
         </div>
        )
}