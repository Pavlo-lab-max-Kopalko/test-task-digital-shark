import './App.css'
import Dominator from './Dominator/Dominator';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Matrics from './Matrics/Matrics';
import NewStage from './NewStage/NewStage';
import Partner from './Partner/Partner';
import Upcoming from './Upcoming/Upcoming';

function App() {
  return (
    <>
      <div className='app'>
        <Header />

        <main>
          <Dominator />
          <Upcoming />
          <Features />
          <Partner />
          <Matrics />
          <NewStage />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App
