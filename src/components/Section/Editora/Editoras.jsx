import styles from "./editora.module.css";

import editoraRocco from "../../../assets/editora-1.jpg";
import editoraGrupoAutentica from "../../../assets/editora-2.png";
import editoraPensamento from "../../../assets/editora-3.png";
import editoraPipoca from "../../../assets/editora-4.png";

export const Editoras = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.titulo}>
        As melhores editoras você encontra aqui!
      </h3>

      <div className={styles.container}>
        <img src={editoraRocco} alt="logo da Editora Rocco" />

        <img
          src={editoraGrupoAutentica}
          alt="logo da Editora Grupo Autêntica"
        />

        <img src={editoraPensamento} alt="logo da Editora Pensamento" />

        <img src={editoraPipoca} alt="logo da Editora Pipoca e Nanquim" />
      </div>
    </section>
  );
};
