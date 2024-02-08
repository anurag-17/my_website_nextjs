import styles from "./frame-nav.module.css";

const FrameNav = () => {
  return (
    <section className={styles.frameNav}>
      <header className={styles.nav}>
        <div className={styles.aboutFrame}>
          <div className={styles.home}>Home</div>
          <div className={styles.about}>About</div>
          <div className={styles.contact}>Contact</div>
        </div>
        <div className={styles.rectangle} />
        <div className={styles.textHeader}>
          <h2 className={styles.landie}>Landing</h2>
        </div>
        <div className={styles.elementbuttonsmallfilled}>
          <div className={styles.bg} />
          <div className={styles.buttonLabel}>Buy Now</div>
        </div>
      </header>
    </section>
  );
};

export default FrameNav;
