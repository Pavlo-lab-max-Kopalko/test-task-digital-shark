import dominatorStyles from './Dominator.module.scss';

const Dominator = () => {
  return (
    <section className={dominatorStyles.dominator}>
      <h2 className={dominatorStyles.dominator__title}> Dominator Play:<br />
        Path to Performance</h2>

      <p className={dominatorStyles.dominator__describe}>We empower operators with customizable, scalable games<br />
        built to earn placement, sustain retention, and drive long-<br />term revenue growth.</p>

      <div className={dominatorStyles.dominator__wrapper}>
        <div className={dominatorStyles.dominator__card}>
          <h3 className={dominatorStyles.dominator__cardName}>
            Full Customization:
          </h3>

          <p className={dominatorStyles.dominator__cardDescribe}>RTP, Volatility & Branding</p>
        </div>
        <div className={dominatorStyles.dominator__card}>
          <h3 className={dominatorStyles.dominator__cardName}>Mobile-First</h3>

          <p className={dominatorStyles.dominator__cardDescribe}>Development Powered by Product Analytics</p>
        </div>
        <div className={dominatorStyles.dominator__card}>
          <h3 className={dominatorStyles.dominator__cardName}>Progression</h3>

          <p className={dominatorStyles.dominator__cardDescribe}>
            Gamification Built for Retention & LTV
          </p>
        </div>
        <div className={dominatorStyles.dominator__card}>
          <h3 className={dominatorStyles.dominator__cardName}>Operator Growth</h3>

          <p className={dominatorStyles.dominator__cardDescribe}>
            Support Through Content & Promotions
          </p>
        </div>
      </div>

    </section>
  );
};

export default Dominator;
