import { Paragraph } from '../../fragments/text/Paragraph'
import { Title2 } from '../../fragments/text/Title2'
import './styles.css'

export const AboutMeSection = ({useEnglish}) => {
    return (
        <section id='about-me-section'>
            <Title2>{useEnglish ? "About me" : "Sobre mim"}</Title2>
            <Paragraph>
                {useEnglish ? 
                "Professional in the field of programming and software and website development, always interested in and studying various programming languages. I have initial experience with C++, where I developed various scripts for users and game administrators, data management in SQL databases and APIs, experience in website and app development using React, Javascript, HTML, and CSS, always following best practices and version control with GIT flow. Willing to learn the language used by the company. Qualities: Expert in logic, systems, task delegation, calmness and good temperament in group environments."
                :
                "Profissional na área de programação e desenvolvimento de softwares e sites, sempre interessado e estudando várias linguagens de programação, experiência inicial com C++, onde desenvolvi vários scripts para usuários e administradores de jogos, gestão de dados em databases SQL e APIs, experiência em desenvolvimento de websites e aplicativos com React, Javascript, HTML e CSS, usando sempre as melhores práticas e versionamento com GIT flow.Disposto a aprender a linguagem usada pela empresa. Qualidades: Facilidade em Lógica, sistemas, divisão de tarefas, calma e bom temperamento em ambientes de grupo."
                }
            </Paragraph>
        </section>
    )
}