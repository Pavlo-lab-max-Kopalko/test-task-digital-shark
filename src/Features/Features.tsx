import urlIcon from './../assets/icon.svg';
import featuresStyles from './Features.module.scss';

const Features = () => {
  return (
    <section className={featuresStyles.features}>
      <h2 className={featuresStyles.features__title}>WHAT SETS US APART</h2>

      <div className={featuresStyles.features__wrapper}>
        <div className={featuresStyles.features__column}>
          <h3 className={featuresStyles.features__titleColumn}>What makes us different</h3>

          <div className={featuresStyles.features__tab}>
            <div className={featuresStyles.features__featureCalled}>Flexible Game Customization</div>
            <button type='button'><img src={urlIcon} alt="" className={featuresStyles.features__icon} /></button>
          </div>
          <div className={featuresStyles.features__tab}>
            <div className={featuresStyles.features__featureCalled}>Gamification with advantage</div>
            <button type='button'><img src={urlIcon} alt="" className={featuresStyles.features__icon} /></button>
          </div>
          <div className={featuresStyles.features__tab}>
            <div className={featuresStyles.features__featureCalled}>Configurable game architecture</div>
            <button type='button'><img src={urlIcon} alt="" className={featuresStyles.features__icon} /></button>
          </div>
          <div className={featuresStyles.features__tab}>
            <div className={featuresStyles.features__featureCalled}>Designed for lobby visibility</div>
            <button type='button'><img src={urlIcon} alt="" className={featuresStyles.features__icon} /></button>
          </div>
        </div>

        <div className={featuresStyles.features__column}>
          <h3 className={featuresStyles.features__titleColumn}>Partner benefits</h3>

          <div className={featuresStyles.features__tab}>
            <div className={featuresStyles.features__featureCalled}>24/7 Technical support</div>
            <button type='button'><img src={urlIcon} alt="" className={featuresStyles.features__icon} /></button>
          </div>
          <div className={featuresStyles.features__tab}>
            <div className={featuresStyles.features__featureCalled}>Exclusive early access</div>
            <button type='button'><img src={urlIcon} alt="" className={featuresStyles.features__icon} /></button>
          </div>
          <div className={featuresStyles.features__tab}>
            <div className={featuresStyles.features__featureCalled}>Real-time analytics</div>
            <button type='button'><img src={urlIcon} alt="" className={featuresStyles.features__icon} /></button>
          </div>
          <div className={featuresStyles.features__tab}>
            <div className={featuresStyles.features__featureCalled}>Custom integration</div>
            <button type='button'><img src={urlIcon} alt="" className={featuresStyles.features__icon} /></button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Features;
