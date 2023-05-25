import styles from './styles.module.css'

export const Title3 = ({ children }) => {
    return (
        <h3 className={styles.text}>{children}</h3>
    )
}