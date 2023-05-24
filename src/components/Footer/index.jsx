import { Title2 } from "../../fragments/text/Title2"
import { Paragraph } from "../../fragments/text/Paragraph"
import { user } from "../../data/user"
import gitHubIcon from "../../assets/github-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import whatsAppIcon from "../../assets/whatsapp-icon.png"

export const Footer = () => {
    return (
        <footer>
            <Title2>Contato</Title2>
            <ul>
                <li>
                    <img src={whatsAppIcon} alt="Whatsapp Icon, telephone colored blue" />
                </li>
                <li>
                    <img src={linkedinIcon} alt="Linkedin Icon, characters IN colored blue" />
                </li>
                <li>
                    <img src={gitHubIcon} alt="Github Icon, cat silhouette colored blue" />
                </li>
            </ul>
            <Paragraph>Todos os direitos reservados - {user}</Paragraph>
        </footer>
    )
}