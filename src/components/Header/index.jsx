import icon from '../../assets/portfolio.png'
import { DefaultButton } from '../../fragments/buttons/DefaultButton'
import { NavigationButton } from '../../fragments/buttons/NavigationButton'
import './styles.css'

export const Header = () => {
    return (
        <header>
            <img src={icon} alt="icon for the page, the name Portfolio written in white" />
            <nav>
                <ul>
                    <NavigationButton><a href='#about-me-section'>Sobre</a></NavigationButton>
                    <NavigationButton><a href='#tech-section'>Stack</a></NavigationButton>
                    <NavigationButton><a href='#project-section'>Projetos</a></NavigationButton>
                </ul>
            </nav>
            <DefaultButton>Contato</DefaultButton>
        </header>
    )
}