import { Title2 } from '../../fragments/text/Title2'
import { Title3 } from '../../fragments/text/Title3';
import { backEndTech, technologies } from '../../data/technologies.js'
import { TechCard } from '../../fragments/cards/TechCard';
import './styles.css'

export const TechSection = ({useEnglish}) => {           
    
    return (
        <section id='tech-section'>
            <Title2>{useEnglish ? "Technologies" :"Tecnologias"}</Title2>
            <Title3>Front-End</Title3>
            <ul>{technologies.map(tech =>
                <TechCard key={tech.id} name={tech.name} icon={tech.img}/> )
                }
            </ul>
            <Title3>Back-End</Title3>
            <ul>
                {backEndTech.map(tech =>
                <TechCard key={tech.id} name={tech.name} icon={tech.img}/>)
                }
            </ul>
        </section>
    )
}