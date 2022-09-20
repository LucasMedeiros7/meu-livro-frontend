import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.titleFooter}>
        <h1>Meu Livro</h1>
        <p>CNPJ 03.003.003/0003-03</p>
      </div>

      <section className={styles.infoColumns}>
        <div>
          <strong>PARA VENDER</strong>
          <ul>
            <li>Vendas online</li>
            <li>Planos de assinatura</li>
            <li>Pacotes de livros</li>
          </ul>
        </div>

        <div>
          <strong>MEU LIVRO</strong>
          <ul>
            <li>Meu Livro e Books Livraria</li>
            <li>Por quê meu livro?</li>
            <li>Trabalhe conosco</li>
            <li>Parcerias</li>
          </ul>
        </div>

        <div>
          <strong>ATENDIMENTO</strong>
          <ul>
            <li>Fale conosco</li>
            <li>Central de ajuda</li>
            <li>Seja nosso cliente</li>
            <li>Ouvidoria</li>
          </ul>
        </div>

        <div>
          <strong>INSTITUCIONAL</strong>
          <ul>
            <li>Segurança</li>
            <li>Política de lirivacidade</li>
            <li>Política de cookies</li>
            <li>Contrato</li>
          </ul>
        </div>
      </section>

      <div className={styles.copyright}>
        <p>@SQUAD 3 - Resilia Educação 2022</p>
      </div>
    </footer>
  );
};
