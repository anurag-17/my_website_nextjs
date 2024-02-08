import styles from "./title-text-card.module.css";

const TitleTextCard = () => {
  return (
    <section className={styles.titleTextCard}>
      <div className={styles.backgroundImageCard}>
        <div className={styles.frameContent}>
          <h1
            className={styles.title}
          >{`Introduce Your Product Quickly & Effectively`}</h1>
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
        <div className={styles.largeCopyButtonFrame}>
          <div className={styles.elementbuttonlargefilled}>
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Purchase UI Kit</div>
          </div>
          <div className={styles.elementbuttonlargefilledCo}>
            <div className={styles.bg1} />
            <div className={styles.buttonLabel1}>Learn More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleTextCard;
