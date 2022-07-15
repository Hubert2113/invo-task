import styles from "./LogoBar.module.scss";

const LogoBar = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <section className={styles.LogoBar}>
        <img height="33px" src="Bitmap-4.png" alt="Pyszne.pl Logo" />
        <img height="19px" src="e.png" alt="DeliGoo Logo" />
        <img height="37px" src="Bitmap.png" alt="Glovo Logo" />
        <img height="37px" src="Bitmap-2.png" alt="UberEats Logo" />
        <img src="Bitmap-3.png" alt="Bolt food Logo" />
      </section>
    </div>
  );
};

export default LogoBar;
