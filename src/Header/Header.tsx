import headerStyles from './Header.module.scss';
import TopBar from "../Top-bar/TopBar";

const Header = () => {
  return (
    <header>
      <TopBar />

      <div className={headerStyles.header}>
        <div className={headerStyles.header__wrapper}>
          <h1 className={headerStyles.header__title}>
            Make Control. <br />
            Dominate. <br />
            Scale Revenue.
          </h1>

          <p className={headerStyles.header__describe}>Dominator Play is a performance-focused game studio that<br />
            builds scalable games to help operators boost engagement,<br /> retention, and revenue.</p>

          <button className={headerStyles.header__start}>Dominate Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
