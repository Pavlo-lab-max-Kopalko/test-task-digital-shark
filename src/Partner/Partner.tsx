import Animation from "../components/Animation/Animation";
import partnerStyles from "./Partner.module.scss";

const Partner = () => {
  return (
    <section className={partnerStyles.partner}>
      <h2 className={partnerStyles.partner__title}>PARTNER NETWORK</h2>

      <div className={partnerStyles.partner__wrapper}>
        <Animation vector="forward" />
        <Animation vector="back" />
        <Animation vector="forwardPlus" />
      </div>
    </section>
  );
};

export default Partner;
