import styles from './styles.module.css'

export const Label = ({ children }) => {
    return (
        <p className={styles.text}>{children}</p>
    )
}