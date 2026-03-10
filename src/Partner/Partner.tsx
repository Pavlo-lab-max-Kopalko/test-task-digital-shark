import Animation from '../Animation/Animation';
import partnerStyles from './Partner.module.scss';
// import urlLogos from './urlLogo';

const Partner = () => {
  return (
    <section className={partnerStyles.partner}>
      <h2 className={partnerStyles.partner__title}>PARTNER NETWORK</h2>

      <div className={partnerStyles.partner__wrapper}>
        <Animation vector='forward' />
        <Animation vector='back' />
        <Animation vector='forwardPlus' />

        {/* <div className={partnerStyles.partner__track}>
          {[...urlLogos].map((logo, index) => (
            <div key={index} className={partnerStyles.partner__rectangle}>
              <img src={logo} alt='' className={partnerStyles.partner__logo} />
            </div>
          ))}
        </div> */}
        {/* <div className={partnerStyles.partner__rectangle}></div>
        <div className={partnerStyles.partner__rectangle}></div>
        <div className={partnerStyles.partner__rectangle}></div>
        <div className={partnerStyles.partner__rectangle}></div>
        <div className={partnerStyles.partner__rectangle}></div>
        <div className={partnerStyles.partner__rectangle}></div>
        <div className={partnerStyles.partner__rectangle}></div>
        <div className={partnerStyles.partner__rectangle}></div> */}
      </div>
    </section>
  );
};

export default Partner;
