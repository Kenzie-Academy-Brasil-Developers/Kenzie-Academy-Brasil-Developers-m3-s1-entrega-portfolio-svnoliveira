import { Title2 } from '../../fragments/text/Title2'
import { Paragraph } from '../../fragments/text/Paragraph'
import { user } from '../../data/user'
import gitHubIcon from '../../assets/github-icon.png'
import linkedinIcon from '../../assets/linkedin-icon.png'
import whatsAppIcon from '../../assets/whatsapp-icon.png'
import './styles.css'

export const Footer = () => {
    return (
        <>
        <footer id='footer'>
            <Title2>Contato</Title2>
            <ul>
                <li>
                <a href="https://wa.me/5534996457475" target='_blank'><img src={whatsAppIcon} alt='Whatsapp Icon, telephone colored blue' /></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/samuel-oliveira-4643351a1/" target='_blank'><img src={linkedinIcon} alt='Linkedin Icon, characters IN colored blue' /></a>
                </li>
                <li>
                    <a href="https://github.com/svnoliveira" target='_blank'><img src={gitHubIcon} alt='Github Icon, cat silhouette colored blue' /></a>
                </li>
            </ul>
            <Paragraph>Todos os direitos reservados - {user}</Paragraph>
        </footer>
        <div id='end'></div>
        </>
    )
}