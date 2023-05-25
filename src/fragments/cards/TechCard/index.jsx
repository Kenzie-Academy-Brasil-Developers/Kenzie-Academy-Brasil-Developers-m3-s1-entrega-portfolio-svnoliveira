import { Title3 } from '../../text/Title3'
import styles from './styles.module.css'

export const TechCard = ({ name, icon }) => {
    return (
        <li className={styles.card}>
        <img src={icon} alt="Technology Icon" />
            <Title3>{name}</Title3>
        </li>
    )
}