import loaderStyles from './Loader.module.scss';
import loaderPositionStyles from './LoaderPosition.module.scss';

interface TimerProps {
  className?: string;
}

const Loader = ({ className }: TimerProps) => {
  return (
    <div className={`${loaderStyles.loader} ${loaderPositionStyles[`${className}`]}`}>
      <div className={loaderStyles.loader__line}>
      </div>
    </div>
  );
};

export default Loader;
