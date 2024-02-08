import SmallIconPositionFrame from "./small-icon-position-frame";
import styles from "./undraw-mobile-login-ikmv-ele.module.css";

const UndrawMobileLoginIkmvEle = () => {
  return (
    <section className={styles.undrawMobileLoginIkmvEle}>
      <div className={styles.mask} />
      <div className={styles.backgroundImageCardInfo}>
        <div className={styles.titleCardInfoCard}>
          <h1 className={styles.title}>{`Light, Fast & Powerful`}</h1>
          <div className={styles.body}>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
            <p className={styles.musDonecQuam}>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
        <div className={styles.cardInfoTitleFrame}>
          <SmallIconPositionFrame />
          <SmallIconPositionFrame />
        </div>
      </div>
      <img
        className={styles.undrawMobileLoginIkmvIcon}
        loading="eager"
        alt=""
        src="/undraw-mobile-login-ikmv@2x.png"
      />
    </section>
  );
};

export default UndrawMobileLoginIkmvEle;
