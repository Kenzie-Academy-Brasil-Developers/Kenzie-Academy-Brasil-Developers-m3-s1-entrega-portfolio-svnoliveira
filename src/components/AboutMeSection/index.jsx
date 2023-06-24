import { Paragraph } from '../../fragments/text/Paragraph'
import { Title2 } from '../../fragments/text/Title2'
import './styles.css'

export const AboutMeSection = () => {
    return (
        <section id='about-me-section'>
            <Title2>Sobre mim</Title2>
            <Paragraph>
                Profissional na área de programação e desenvolvimento de softwares e sites, sempre interessado e estudando várias linguagens de programação, experiência inicial com C++, onde desenvolvi vários scripts para usuários e administradores de jogos, gestão de dados em databases SQL e APIs, experiência em desenvolvimento de websites e aplicativos com React, Javascript, HTML e CSS, usando sempre as melhores práticas e versionamento com GIT flow.
                Disposto a aprender a linguagem usada pela empresa.

                Qualidades:
                Facilidade em Lógica, sistemas, divisão de tarefas, calma e bom temperamento em ambientes de grupo.

            </Paragraph>
        </section>
    )
}