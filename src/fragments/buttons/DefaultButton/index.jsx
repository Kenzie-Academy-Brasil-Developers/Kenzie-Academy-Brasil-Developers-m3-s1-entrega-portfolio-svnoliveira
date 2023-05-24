import styles from './styles.module.css'

export const DefaultButton = ({ children }) => {
    return (
        <button className={styles.button}>{children}</button>
    )
}