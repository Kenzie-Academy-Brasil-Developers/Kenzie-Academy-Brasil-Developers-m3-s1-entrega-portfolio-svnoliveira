import styles from './styles.module.css'

export const Link = ({ children }) => {
    return (
        <h1 className={styles.text}>{children}</h1>
    )
}