import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.titleParent}>
        <h1 className={styles.title}>A Price To Suit Everyone</h1>
        <div
          className={styles.body}
        >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</div>
      </div>
      <div className={styles.priceParent}>
        <div className={styles.price}>$40</div>
        <div className={styles.title1}>UI Design Kit</div>
      </div>
      <div className={styles.footerFrame}>
        <div className={styles.body1}>See, One price. Simple.</div>
        <div className={styles.elementbuttonmediumfilled}>
          <div className={styles.bg} />
          <div className={styles.buttonLabel}>Purchase Now</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
