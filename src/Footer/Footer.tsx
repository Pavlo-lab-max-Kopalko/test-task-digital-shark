import footerStyles from "./Footer.module.scss";
import logoPath from "./../assets/general-logos/logo.svg";
import instag from "./../assets/general-logos/Social-1.svg";
import linkedin from "./../assets/general-logos/Social.svg";
import eightinPlus from "./../assets/general-logos/Auto Layout Vertical.svg";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer__wrapper}>
        <div className={footerStyles.footer__blockWrapper}>
          <img src={logoPath} alt="" className={footerStyles.footer__logo} />
          <img
            src={eightinPlus}
            alt=""
            className={footerStyles.footer__eightin}
          />
          <div className={footerStyles.footer__info}>
            Our website is intended for users aged 18 and over.
          </div>
          <a
            href="mailto:partners@dominatorplay.com"
            className={footerStyles.footer__email}
          >
            partners@dominatorplay.com
          </a>

          <div className={footerStyles.footer__imageWrapper}>
            <img src={instag} alt="" className={footerStyles.footer__insta} />
            <img
              src={linkedin}
              alt=""
              className={footerStyles.footer__linkedin}
            />
          </div>
        </div>

        <div className={footerStyles.footer__references}>
          <h3 className={footerStyles.footer__blockTitle}>Explore</h3>
          <a href="#" className={footerStyles.footer__link}>
            Home
          </a>
          <a href="#" className={footerStyles.footer__link}>
            Our games
          </a>
          <a href="#" className={footerStyles.footer__link}>
            About us
          </a>
          <a href="#" className={footerStyles.footer__link}>
            Events
          </a>
          <a href="#" className={footerStyles.footer__link}>
            Blog
          </a>
          <a href="#" className={footerStyles.footer__link}>
            Careers
          </a>
          <a href="#" className={footerStyles.footer__link}>
            Contact us
          </a>
        </div>

        <div className={footerStyles.footer__references}>
          <h3 className={footerStyles.footer__blockTitle}>Legal</h3>

          <a href="#" className={footerStyles.footer__link}>
            Privaci police
          </a>
          <a href="#" className={footerStyles.footer__link}>
            Terms of service
          </a>
          <a href="#" className={footerStyles.footer__link}>
            Compliance
          </a>
          <a href="#" className={footerStyles.footer__link}>
            Cooke Policy
          </a>
        </div>
      </div>

      <div className={footerStyles.footer__linearUnder}>
        <div className={footerStyles.footer__linear}></div>

        <p className={footerStyles.footer__endOfPage}>
          2026 &copy; Brand All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
