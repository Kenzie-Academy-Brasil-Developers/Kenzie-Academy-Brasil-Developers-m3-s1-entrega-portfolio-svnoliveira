import { Paragraph } from '../../fragments/text/Paragraph'
import { Title2 } from '../../fragments/text/Title2'
import './styles.css'

export const AboutMeSection = () => {
    return (
        <section id='about-me-section'>
        <Title2>Sobre mim</Title2>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, 
            imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, 
            dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. 
            Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, 
            at feugiat orci.
        </Paragraph>
        </section>
    )
}