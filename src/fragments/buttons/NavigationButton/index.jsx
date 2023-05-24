import styles from './styles.module.css'

export const NavigationButton = ({ children }) => {
    return (
        <li className={styles.button}>{children}</li>
    )
}