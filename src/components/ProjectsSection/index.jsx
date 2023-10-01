import { Title2 } from '../../fragments/text/Title2';
import { projects } from '../../data/projects';
import { ProjectCard } from '../../fragments/cards/ProjectCard';
import './styles.css';

export const ProjectsSection = ({useEnglish}) => {
    return (
        <section id='project-section'>
            <Title2>{useEnglish ? "Projects" :"Projetos"}</Title2>
            <ul>{projects.map(project =>
                <ProjectCard key={project.id} projectUrl={project.url} name={project.name} 
                description={useEnglish ? project.english : project.description}/>)}
            </ul>
        </section>
    )
}