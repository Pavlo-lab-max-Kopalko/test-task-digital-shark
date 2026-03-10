import timerStyles from './Timer.module.scss';
import timerPositionStyles from './TimerPosition.module.scss';

interface TimerProps {
  className?: string;
}

const Timer = ({ className }: TimerProps) => {
  return (
    <div className={`${timerStyles.timer__wrapper} ${timerPositionStyles[`${className}`] || ''}`}>
      <div className={`${timerStyles.timer}`}>
        <div className={timerStyles.timer__zeros}>00</div>
        <div className={timerStyles.timer__twoPoints}>:</div>
        <div className={`${timerStyles.timer__zeros} ${timerStyles.timer__zeros__darkNumbers}`}>05</div>
        <div className={timerStyles.timer__twoPoints}>:</div>
        <div className={`${timerStyles.timer__zeros} ${timerStyles.timer__zeros__darkNumbers}`}>08</div>
        <div className={timerStyles.timer__twoPoints}>:</div>
        <div className={`${timerStyles.timer__zeros} ${timerStyles.timer__zeros__darkNumbers}`}>32</div>

        <div className={`${timerStyles.timer__day} ${timerStyles.timer__time}`}>day</div>
        <div className={`${timerStyles.timer__hour} ${timerStyles.timer__time}`}>hour</div>
        <div className={`${timerStyles.timer__minutes} ${timerStyles.timer__time}`}>minutes</div>
        <div className={`${timerStyles.timer__seconds} ${timerStyles.timer__time}`}>seconds</div>
      </div>
    </div>
  );
};

export default Timer;
