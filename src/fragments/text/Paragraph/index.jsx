import styles from './styles.module.css'

export const Paragraph = ({ children }) => {
    return (
        <p className={styles.text}>{children}</p>
    )
}