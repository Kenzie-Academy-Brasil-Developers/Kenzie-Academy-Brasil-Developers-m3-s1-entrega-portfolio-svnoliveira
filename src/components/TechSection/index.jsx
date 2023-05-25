import { Title2 } from '../../fragments/text/Title2'
import { technologies } from '../../data/technologies.js'
import { TechCard } from '../../fragments/cards/TechCard';
import './styles.css'

export const TechSection = () => {                          
    return (
        <section id='tech-section'>
            <Title2>Tecnologias</Title2>
            <ul>{technologies.map(tech =>
                <TechCard name={tech.name} icon={tech.img}/> )}
            </ul>
        </section>
    )
}