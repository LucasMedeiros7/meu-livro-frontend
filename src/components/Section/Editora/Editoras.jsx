import styles from "./editora.module.css";

export const Editoras = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.titulo}>
        As melhores editoras você encontra aqui!
      </h3>

      <div className={styles.container}>
        <img src="src/assets/editora-1.jpg" alt="logo da Editora Rocco" />

        <img
          src="src/assets/editora-2.png"
          alt="logo da Editora Grupo Autêntica"
        />

        <img src="src/assets/editora-3.png" alt="logo da Editora Pensamento" />

        <img
          src="src/assets/editora-4.png"
          alt="logo da Editora Pipoca e Nanquim"
        />
      </div>
    </section>
  );
};
