import { Paragraph } from '../../text/Paragraph'
import { Title3 } from '../../text/Title3'
import { Link } from '../../text/Link'
import styles from './styles.module.css'
import gitHubIcon from '../../../assets/git-icon.png'

export const ProjectCard = ({ name, description, projectUrl }) => {
    return (
        <li className={styles.card}>
            <header>
                <Title3>{name}</Title3>
                <img src={gitHubIcon} alt="GitHub Icon, a white cat silhouette" />
            </header>
            <div>
            <Paragraph>{description}</Paragraph>
            <Link><a href={projectUrl}Saiba Mais target='_blank'>Link do projeto</a></Link>
            </div>
        </li>
    )
}