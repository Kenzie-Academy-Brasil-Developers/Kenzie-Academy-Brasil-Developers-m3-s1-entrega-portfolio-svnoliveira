import { Title2 } from "../../fragments/text/Title2"
import { technologies } from "../../data/technologies.js"
import { TechCard } from "../../fragments/cards/TechCard";
import './styles.css'

export const TechSection = () => {                          //Experimentei com foreach e apareceram vários erros, 
    const listTechnologies = technologies.map(tech =>       //segui a documentação que apareceu para chegar a este resultado: 
        <TechCard name={tech.name} icon={tech.img}/>        //https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    );

    return (
        <section id="tech-section">
            <Title2>Tecnologias</Title2>
            <ul>
            {listTechnologies}
            </ul>
        </section>
    )
}