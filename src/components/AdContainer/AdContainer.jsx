import styles from "./AdContainer.module.scss";

const AdContainter = () => {
  return (
    <section className={styles.adsContainer}>
      <div
        className={`${styles.adsContainer__left} ${styles.adsContainer__item}`}
      >
        <h3 className={styles.adsContainer__itemHeader}>Zestaw dla 3 osób</h3>
        <p className={styles.adsContainer__itemDescription}>
            Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób 
            już od <span className={`${styles.adsContainer__itemDescriptionHighlight} ${styles.adsContainer__itemDescriptionHighlightLeft}`}>39 zł</span> 
        </p>
        <button className={styles.adsContainer__itemButton}>Zamów online</button>
      </div>
      <div
        className={`${styles.adsContainer__right} ${styles.adsContainer__item}`}
      >
        <h3 className={styles.adsContainer__itemHeader}>UberEats</h3>
        <p className={styles.adsContainer__itemDescription}>
          Zamawiaj w aplikacji <span className={`${styles.adsContainer__itemDescriptionHighlight} ${styles.adsContainer__itemDescriptionHighlightRight}`}>10% taniej.</span> Pobierz aplikację UberEats już dziś.
        </p>
        <div className={styles.adsContainer__itemIconBox}>
            <a href="a">
              <svg className={styles.adsContainer__itemIcon}>
                  <use href='sprite.svg#Group 4'></use>
              </svg>
            </a>
            <a href="a">
              <svg className={styles.adsContainer__itemIcon}>
                  <use href='sprite.svg#App_Store_(iOS)'></use>
              </svg>
            </a>
            <a href="a">
              <svg className={styles.adsContainer__itemIcon}>
                  <use href='sprite.svg#huawei-app-badge-9757fa 2'></use>
              </svg>
            </a>
        </div>
        <button className={styles.adsContainer__itemButton}>Zamów online</button>
      </div>
    </section>
  );
};

export default AdContainter;
