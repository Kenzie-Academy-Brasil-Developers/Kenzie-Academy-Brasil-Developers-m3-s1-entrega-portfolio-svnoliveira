import { Title2 } from "../../fragments/text/Title2";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../fragments/cards/ProjectCard";

export const ProjectsSection = () => {
    const listProjects = projects.map(project =>
        <ProjectCard name={project.name} description={project.description}/>
    );

    return (
        <section id="project-section">
            <Title2>Projetos</Title2>
            <ul>{listProjects}</ul>
        </section>
    )
}