import styles from "./footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.titleFooter}>
                <h1>Meu Livro</h1>
                <p>CNPJ 03.003.003/0003-03</p>
            </div>

            <section className={styles.infoColumns}>
                <div>
                    <ul>PARA VENDER</ul>
                    <li>Vendas online</li>
                    <li>Planos de assinatura</li>
                    <li>Pacotes de livros</li>
                </div>

                <div>
                    <ul>MEU LIVRO</ul>
                    <li>Meu Livro e Books Livraria</li>
                    <li>Por quê meu livro?</li>
                    <li>Trabalhe conosco</li>
                    <li>Parcerias</li>
                </div>

                <div>
                    <ul>ATENDIMENTO</ul>
                    <li>Fale conosco</li>
                    <li>Central de ajuda</li>
                    <li>Seja nosso cliente</li>
                    <li>Ouvidoria</li>
                </div>

                <div>
                    <ul>INSTITUCIONAL</ul>
                    <li>Segurança</li>
                    <li>Política de  lirivacidade</li>
                    <li>Política de cookies</li>
                    <li>Contrato</li>
                </div>
            </section>

            <div className={styles.copyright}>
                <p>@SQUAD 3 - Resilia Educação 2022</p>
            </div>
        </footer>
    )

}