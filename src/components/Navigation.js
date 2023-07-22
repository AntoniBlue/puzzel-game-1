import styles from "./Navigation.module.css"

const Navigation = () => {

    return (
        <div className={styles.container}>
            <a className={styles.buttons} href="#HomePage">HomePage</a>
            <a className={styles.buttons} href="#MiniGame">MiniGame</a>
        </div>
    )
}

export default Navigation