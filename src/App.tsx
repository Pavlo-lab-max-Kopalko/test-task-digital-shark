// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Dominator from './Dominator/Dominator';
import Features from './Features/Features';
import Header from './Header/Header';
import Partner from './Partner/Partner';
import Upcoming from './Upcoming/Upcoming';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Header />

        <main>
          <Dominator />
          <Upcoming />
          <Features />
          <Partner />
          <section>
            <h3>Matrics that say more</h3>
          </section>
        </main>

        <footer>

        </footer>
      </div>
    </>
  );
}

export default App
