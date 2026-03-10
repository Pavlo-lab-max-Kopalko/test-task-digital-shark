import upcomingStyles from './Upcoming.module.scss';
import zeusUrl from './../assets/05442d18ac6ba26b1d4ccd85ea3c20b354562418.png';
import cowBoy from './../assets/cowboy.png';
import Timer from '../Timer/Timer';
import Loader from '../Loader/Loader';

const Upcoming = () => {
  return (
    <section className={upcomingStyles.upcoming}>
      <h2 className={upcomingStyles.upcoming__title}>Upcoming Releases</h2>

      <div className={upcomingStyles.upcoming__wrapper}>
        <div className={upcomingStyles.upcoming__imageWrapper}>
          <img src={zeusUrl} alt="zeus" className={upcomingStyles.upcoming__image} />

          <Timer className={'position--2'} />
          <Loader className={'position--1'} />
        </div>

        <div className={`${upcomingStyles.upcoming__imageWrapper} ${upcomingStyles['upcoming__imageWrapper--1']}`}>
          <img src={cowBoy} alt="zeus" className={`${upcomingStyles.upcoming__image} ${upcomingStyles.upcoming__cowboy}`} />
        </div>

        <div className={upcomingStyles.upcoming__imageWrapper}>
          <img src={zeusUrl} alt="zeus" className={upcomingStyles.upcoming__image} />

          <Timer className={'position--2'} />
          <Loader className={'position--1'} />

        </div>

        <div className={upcomingStyles.upcoming__imageWrapper}>
          <img src={zeusUrl} alt="zeus" className={upcomingStyles.upcoming__image} />

          <Timer className={'position--2'} />
          <Loader className={'position--1'} />
        </div>

        <div className={upcomingStyles.upcoming__imageWrapper}>
          <img src={zeusUrl} alt="zeus" className={upcomingStyles.upcoming__image} />

          <Timer className={'position--2'} />
          <Loader className={'position--1'} />
        </div>

        <div className={upcomingStyles.upcoming__imageWrapper}>
          <div className={upcomingStyles.upcoming__stay}>
            <h3 className={upcomingStyles.upcoming__action}>Stay Ahead of<br />
              the Curve</h3>
            
            <button className={upcomingStyles.upcoming__button}>Summon us</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Upcoming;
