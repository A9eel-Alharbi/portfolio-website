function ProjectCard({title , description , techStack , status , image , link}){
    return (
         <div className="project-card">
            {image && <img src={image} alt={title}/>}
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {techStack.map((tech) =>(<li key={tech}>{tech}</li>))}
            </ul>
            <span>{status}</span>
            <a href={link}>Check project in GitHub</a>
         </div>
    )
}

export default ProjectCard