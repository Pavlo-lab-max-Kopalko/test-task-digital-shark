import matrcsStyles from './Matrics.module.scss';

const Matrics = () => {
  return (
    <section className={matrcsStyles.matrics}>
      <h3 className={matrcsStyles.matrics__title}>Matrics that say more</h3>

      <div className={matrcsStyles.matrics__wrapper}>
        <div className={matrcsStyles.matrics__block}>
          <div className={matrcsStyles.matrics__contentWrapper}>
            <div className={matrcsStyles.matrics__blockTitle}>24/7</div>
            <div className={matrcsStyles.matrics__blockDescribe}>SUPPORT</div>
          </div>
        </div>

        <div className={matrcsStyles.matrics__middleBlock}>

          <div className={`${matrcsStyles.matrics__middleBlockWrapper} ${matrcsStyles.matrics__middleBlockWrapper__1}`}>
            <div className={matrcsStyles.matrics__middleBlockDescribe}>ALL MAJOR CRYPTO</div>
          </div>

          <div className={`${matrcsStyles.matrics__middleBlockWrapper} ${matrcsStyles.matrics__middleBlockWrapper__2}`}>
            <div className={matrcsStyles.matrics__middleBlockDescribe}>GLOBAL FIAT COVERAGE</div>
          </div>
        </div>

        <div className={matrcsStyles.matrics__thirdBlock}>
          <div className={`${matrcsStyles.matrics__thirdBlockWrapper} ${matrcsStyles.matrics__thirdBlockWrapper__1}`}>
            <div className={matrcsStyles.matrics__thirdBlockTitle}>16+</div>
            <div className={matrcsStyles.matrics__thirdBlockDescribe}>LANGUAGES</div>
          </div>

          <div className={`${matrcsStyles.matrics__thirdBlockWrapper} ${matrcsStyles.matrics__thirdBlockWrapper__2}`}>
            <div className={matrcsStyles.matrics__thirdBlockDescribe__2}>mobile<br /> first</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Matrics;
