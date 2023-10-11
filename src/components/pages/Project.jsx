/*project me div w/ props*/

export default function Project(project) {
    return (
            <div id="project_section" className="col-12 col-md-4 text-center">
                        <a href={project.github}><h4>{project.title}</h4><p>(click here for github)</p></a>
                        <a href={project.link}>
                                <div id="project_link" style={{backgroundImage: `url(${project.im_path})`}}>
                                </div>
                        </a>
            </div>
        )
}