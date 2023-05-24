import icon from '../../assets/portfolio.png'
import { DefaultButton } from '../../fragments/buttons/DefaultButton'
import { NavigationButton } from '../../fragments/buttons/NavigationButton'

export const Header = () => {
    return (
        <header>
            <img src={icon} alt="icon for the page, the name Portfolio written in white" />
            <nav>
                <ul>
                    <NavigationButton>Sobre</NavigationButton>
                    <NavigationButton>Stack</NavigationButton>
                    <NavigationButton>Projetos</NavigationButton>
                </ul>
            </nav>
            <DefaultButton>Contato</DefaultButton>
        </header>
    )
}