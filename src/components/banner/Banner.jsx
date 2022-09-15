import styles from "./Banner.module.css";

import mulherFelizERelaxada from "../../assets/mulher-feliz-e-relaxada.png";
import livroBanner1 from "../../assets/livro-banner-1.png";
import livroBanner2 from "../../assets/livro-banner-2.png";
import livroBanner3 from "../../assets/livro-banner-3.png";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1>Nunca foi tão fácil encontrar meu livro!!</h1>
      </div>

      <div className={styles.anuncio}>
        <div className={styles.anuncioDesconto}>
          <strong>
            Coleção
            <br />
            de livros
          </strong>
          <aside>
            <p>com até</p>
            <div>
              <span>10</span>
              <span>%OFF</span>
            </div>
          </aside>
        </div>
        <img className={styles.imgBanner} src={mulherFelizERelaxada} />

        <div className={styles.livrosDesconto}>
          <img src={livroBanner1} alt="" />
          <img src={livroBanner2} alt="" />
          <img src={livroBanner3} alt="" />
        </div>
      </div>
    </div>
  );
}
