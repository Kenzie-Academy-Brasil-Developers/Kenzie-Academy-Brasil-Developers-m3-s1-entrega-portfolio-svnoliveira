import icon from '../../assets/portfolio.png'
import { DefaultButton } from '../../fragments/buttons/DefaultButton'
import { NavigationButton } from '../../fragments/buttons/NavigationButton'
import './styles.css'

export const Header = ({useEnglish, setUseEnglish}) => {

    const handleClick = () => {
         if (!useEnglish){
            setUseEnglish(true);
            localStorage.setItem("SVNEnglish", true)
         } else {
            setUseEnglish(false);
            localStorage.setItem("SVNEnglish", false)
         }
    };

    return (
        <header>
            <img src={icon} alt='icon for the page, the name Portfolio written in white' />
            <nav>
                <ul>
                    <NavigationButton><a href='#about-me-section'>{useEnglish? "About":"Sobre"}</a></NavigationButton>
                    <NavigationButton><a href='#tech-section'>Stack</a></NavigationButton>
                    <NavigationButton><a href='#project-section'>{useEnglish? "Projects":"Projetos"}</a></NavigationButton>
                </ul>
                <button onClick={handleClick}>{useEnglish? "PT-BR Mode":"English Mode"}</button>
            </nav>
            <DefaultButton><a href='#footer'>{useEnglish? "Contact":"Contato"}</a></DefaultButton>
        </header>
    )
}