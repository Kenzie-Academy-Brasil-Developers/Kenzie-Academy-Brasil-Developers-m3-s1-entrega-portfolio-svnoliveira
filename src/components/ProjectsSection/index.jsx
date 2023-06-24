import { Title2 } from '../../fragments/text/Title2';
import { projects } from '../../data/projects';
import { ProjectCard } from '../../fragments/cards/ProjectCard';
import './styles.css';

export const ProjectsSection = () => {
    return (
        <section id='project-section'>
            <Title2>Projetos</Title2>
            <ul>{projects.map(project =>
                <ProjectCard key={project.id} projectUrl={project.url} name={project.name} description={project.description}/>)}
            </ul>
        </section>
    )
}