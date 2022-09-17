import styles from "./editora.module.css"

export const Editoras = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.titulo}>As melhores editoras você encontra aqui!</h3>
            <div className={styles.container}>
                <span>
                    <img className={styles.tamanho} src="src/assets/editora-1.jpg" alt="logo da Editora Rocco" />
                </span>
                <span>
                    <img className={styles.tamanho} src="src/assets/editora-2.png" alt="logo da Editora Grupo Autêntica" />
                </span>
                <span>
                    <img className={styles.tamanho} src="src/assets/editora-3.png" alt="logo da Editora Pensamento" />
                </span>
                <span>
                    <img className={styles.tamanho} src="src/assets/editora-4.png" alt="logo da Editora Pipoca e Nanquim" />
                </span>
            </div>
        </section>
    )
}