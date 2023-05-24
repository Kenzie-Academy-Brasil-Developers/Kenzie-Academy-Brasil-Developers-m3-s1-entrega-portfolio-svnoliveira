import styles from './styles.module.css'

export const Title2 = ({ children }) => {
    return (
        <h1 className={styles.text}>{children}</h1>
    )
}