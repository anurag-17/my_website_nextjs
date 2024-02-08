import styles from "./designer-copy-frame.module.css";

const DesignerCopyFrame = () => {
  return (
    <section className={styles.designerCopyFrame}>
      <div className={styles.introCopy}>
        <div className={styles.copyrightRectangle} />
        <img
          className={styles.undrawSocialInfluencerSgsvIcon}
          loading="eager"
          alt=""
          src="/undraw-social-influencer-sgsv.svg"
        />
        <div className={styles.introCopyInner}>
          <div className={styles.titleParent}>
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
    </section>
  );
};

export default DesignerCopyFrame;
