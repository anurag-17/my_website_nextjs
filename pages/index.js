import FrameNav from "../components/frame-nav";
import TitleTextCard from "../components/title-text-card";
import UndrawMobileLoginIkmvEle from "../components/undraw-mobile-login-ikmv-ele";
import ContentCard from "../components/content-card";
import DesignerCopyFrame from "../components/designer-copy-frame";
import CallToAction from "../components/call-to-action";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./index.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage2}>
      <div className={styles.mask} />
      <FrameNav />
      <TitleTextCard />
      <UndrawMobileLoginIkmvEle />
      <ContentCard />
      <DesignerCopyFrame />
      <CallToAction />
      <FrameComponent />
      <Footer />
      <div className={styles.notProvided}>
        <div className={styles.rectangleWrapper}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
