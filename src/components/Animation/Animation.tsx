import urlLogos from "../../Partner/urlLogo";
import animationStyles from "./Animation.module.scss";
import vectorStyles from "./Vector.module.scss";

type AnimationProps = {
  vector: string;
};

const Animation = ({ vector }: AnimationProps) => {
  return (
    <div
      className={`${animationStyles.animation__track} ${vectorStyles[`${vector}`]}`}
    >
      {[...urlLogos].map((logo, index) => (
        <div key={index} className={animationStyles.animation__rectangle}>
          <img src={logo} alt="" className={animationStyles.animation__logo} />
        </div>
      ))}
    </div>
  );
};

export default Animation;
