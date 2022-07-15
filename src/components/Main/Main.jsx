import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.swiper}>
      <Swiper
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.swiper__slide}>
          <div>
            <div className={styles.specialOffer}>
              <h2 className={styles.specialOffer__header}>
                <span className={styles.specialOffer__headerHighlight}>
                  Rabat 10%
                </span>{" "}
                na pierwsze zamówienie!
              </h2>
              <p className={styles.specialOffer__description}>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z{" "}
                <span className={styles.specialOffer__descriptionHighlight}>
                  promocji -10%
                </span>
                . Spiesz się, czas trwania promocji do końca lutego.
              </p>
              <button className={styles.specialOffer__button}>
                Zamów online
              </button>
            </div>
          </div>
          <div className={styles.hero}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiper__slide}>
          <div>
            <div className={styles.specialOffer}>
              <h2 className={styles.specialOffer__header}>
                <span className={styles.specialOffer__headerHighlight}>
                  Rabat 10%
                </span>{" "}
                na pierwsze zamówienie!
              </h2>
              <p className={styles.specialOffer__description}>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z{" "}
                <span className={styles.specialOffer__descriptionHighlight}>
                  promocji -10%
                </span>
                . Spiesz się, czas trwania promocji do końca lutego.
              </p>
              <button className={styles.specialOffer__button}>
                Zamów online
              </button>
            </div>
          </div>
          <div className={styles.hero}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div>
            <div className={styles.specialOffer}>
              <h2 className={styles.specialOffer__header}>
                <span className={styles.specialOffer__headerHighlight}>
                  Rabat 10%
                </span>{" "}
                na pierwsze zamówienie!
              </h2>
              <p className={styles.specialOffer__description}>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z{" "}
                <span className={styles.specialOffer__descriptionHighlight}>
                  promocji -10%
                </span>
                . Spiesz się, czas trwania promocji do końca lutego.
              </p>
              <button className={styles.specialOffer__button}>
                Zamów online
              </button>
            </div>
          </div>
          <div className={styles.hero}></div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Main;
