import styles from './vantagens.module.css'

export const Vantagens = () => {
    return (
        <section className={styles.sectionVantagens}>
            <h3 className={styles.titulo}>Conheça a Meu Livro</h3>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <p>Compra fácil</p>
                    <span className={styles.span}>
                        <img className={styles.img} src="src/assets/carrinho.png" alt="carrinho de compras" />
                    </span>
                </div>

                <div className={styles.icons}>
                    <p>Pagamento seguro</p>
                    <span className={styles.span}>
                        <img className={styles.img} src="src/assets/preco.png" alt="mão com um cifrão em cima" />
                    </span>
                </div>

                <div className={styles.icons}>
                    <p>Entrega rápida</p>
                    <span className={styles.span}>
                        <img src="src/assets/caminhao.png" alt="caminhão" width="25%"/>
                    </span>
                </div>

                <div className={styles.icons}>
                    <p>Reembolso garantido</p>
                    <span className={styles.span}>
                        <img className={styles.img} src="src/assets/dinheiro.png" alt="símbolo do cifrão" />
                    </span>
                </div>

                <div className={styles.icons}>
                    <p>Arrependimento zero!</p>
                    <span className={styles.span}>
                        <img className={styles.img} src="src/assets/cliente.png" alt="rosto feliz" />
                    </span>
                </div>
            </div>
        </section>
    )
}