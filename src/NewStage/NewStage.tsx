import newStageStyles from './NewStage.module.scss';

const NewStage = () => {
  return (
    <section className={newStageStyles.newStage}>
      <h2 className={newStageStyles.newStage__title}>DOMINATE THE NEXT STAGE</h2>
      <p className={newStageStyles.newStage__info}>Partner with Dominator Play to launch high-impact casino games that command operator<br /> performance, own the lobby, and seize the competitive edge.</p>

      <button className={newStageStyles.newStage__button}>Dominate Your Market</button>
    </section>
  );
};

export default NewStage;
