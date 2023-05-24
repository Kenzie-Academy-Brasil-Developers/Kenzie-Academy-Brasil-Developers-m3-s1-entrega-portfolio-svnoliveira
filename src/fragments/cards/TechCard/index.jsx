import { Title3 } from '../../text/Title3'
import styles from './styles.module.css'

export const TechCard = ({ name, icon }) => {
    return (
        <li className={styles.card}>
            <Title3>{name}</Title3>
        <img src={icon} alt="Technology Icon" />
        </li>
    )
}