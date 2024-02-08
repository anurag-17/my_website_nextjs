import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rectangle} />
      <div className={styles.designerIntroCopyFrame}>
        <div className={styles.div}>©2023 Yourcompany</div>
        <div className={styles.rectangleShape}>
          <h2 className={styles.landie}>Landing</h2>
        </div>
        <div className={styles.elementbuttonsmallfilled}>
          <div className={styles.bg} />
          <div className={styles.buttonLabel}>Purchase now</div>
        </div>
      </div>
      <div className={styles.frameFooter}>
        <div className={styles.footerBase} />
        <div className={styles.frameWithTitleBody}>
          <div className={styles.homeAboutContactFrame}>
            <div className={styles.home}>Home</div>
            <div className={styles.about}>About</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.frameWithIconSocialInstagr}>
            <img
              className={styles.iconsocialinstagramCopy4}
              loading="eager"
              alt=""
              src="/iconsocialinstagram-copy-4.svg"
            />
            <img
              className={styles.iconsocialinstagramCopy3}
              loading="eager"
              alt=""
              src="/iconsocialinstagram-copy-3@2x.png"
            />
            <img
              className={styles.iconsocialinstagramCopy2}
              loading="eager"
              alt=""
              src="/iconsocialinstagram-copy-2.svg"
            />
            <img
              className={styles.iconsocialinstagramCopy}
              loading="eager"
              alt=""
              src="/iconsocialinstagram-copy@2x.png"
            />
            <img
              className={styles.iconsocialinstagram}
              loading="eager"
              alt=""
              src="/iconsocialinstagram@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
