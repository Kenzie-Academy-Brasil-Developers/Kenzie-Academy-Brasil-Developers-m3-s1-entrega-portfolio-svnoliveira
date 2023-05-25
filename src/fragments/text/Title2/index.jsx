import styles from './styles.module.css'

export const Title2 = ({ children }) => {
    return (
        <h2 className={styles.text}>{children}</h2>
    )
}