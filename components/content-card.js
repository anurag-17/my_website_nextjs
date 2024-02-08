import styles from "./content-card.module.css";

const ContentCard = () => {
  return (
    <section className={styles.contentCard}>
      <div className={styles.intro}>
        <div className={styles.happyNewsvgFrame} />
        <img
          className={styles.undrawHappyNewsHxmtIcon}
          loading="eager"
          alt=""
          src="/undraw-happy-news-hxmt@2x.png"
        />
        <div className={styles.introCopyRectangle}>
          <div className={styles.infoCardBody}>
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
        </div>
      </div>
      <img
        className={styles.designer1Icon}
        loading="eager"
        alt=""
        src="/designer-1@2x.png"
      />
    </section>
  );
};

export default ContentCard;
