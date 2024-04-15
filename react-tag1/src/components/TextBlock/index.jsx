import styles from './TextBlock.module.css'

const TextBlock = ({title, subTitle, mainText}) => {
    return (
        <section className={styles.textBlockSection}>
            <h4>{title}</h4>
            <p className={styles.subTitle}>{subTitle}</p>
            <p>{mainText}</p>
        </section>
    )
}

export default TextBlock
