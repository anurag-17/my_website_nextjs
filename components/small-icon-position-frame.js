import styles from "./small-icon-position-frame.module.css";

const SmallIconPositionFrame = () => {
  return (
    <div className={styles.smallIconPositionFrame}>
      <img
        className={styles.elementcardinfoCardsmalliIcon}
        loading="eager"
        alt=""
        src="/elementcardinfocardsmalliconpositionleft@2x.png"
      />
      <div className={styles.titleParent}>
        <div className={styles.title}>Title Goes Here</div>
        <div
          className={styles.body}
        >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
      </div>
    </div>
  );
};

export default SmallIconPositionFrame;
