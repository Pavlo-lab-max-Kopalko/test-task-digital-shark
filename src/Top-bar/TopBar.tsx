import logoUrl from './../assets/logo-primary.svg';
import engUrl from './../assets/united-kingdom.svg';
import downUrl from './../assets/mingcute_down-line.svg';
import topBarStyles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <div className={topBarStyles.topBar}>
      <nav className={topBarStyles.topBar__navigation}>
        <button type="button" className={topBarStyles.topBar__home}>
          <img src={logoUrl} alt="logo" className={topBarStyles.topBar__logo} />
        </button>

        <div className={topBarStyles.topBar__options}>
          <ul className={topBarStyles.topBar__options__list}>
            <li className={topBarStyles.topBar__item}>
              <button className={`${topBarStyles.topBar__section} ${topBarStyles['topBar__section--first']}`}>Games</button>
            </li>
            <li className={topBarStyles.topBar__item}>
              <button className={topBarStyles.topBar__section}>About us</button>
            </li>
            <li className={`${topBarStyles.topBar__item} ${topBarStyles.topBar__downItem}`}>
              <button className={topBarStyles.topBar__section}>News</button>

              <button type="button" className={topBarStyles.topBar__buttonDown}>
                <img src={downUrl} alt="" />
              </button>
            </li>
            <li className={`${topBarStyles.topBar__item} ${topBarStyles.topBar__downItem}`}>
              <button className={`${topBarStyles.topBar__section} ${topBarStyles.topBar__section__lang}`}>
                <img src={engUrl} alt="" />
              </button>

              <button type="button" className={topBarStyles.topBar__buttonDown__second}>
                <img src={downUrl} alt="" />
              </button>
            </li>
            <li className={topBarStyles.topBar__item}>
              <button className={`${topBarStyles.topBar__section} ${topBarStyles.topBar__sectionUnique}`}>Client Area</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopBar
