import { FC } from 'react';

import Navbar from './Navbar';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';

import styles from './App.module.css';

const App: FC = () => {
  let component;

  switch (window.location.pathname) {
    case '/':
      component = <Home />;
      break;

    case '/pricing':
      component = <Pricing />;
      break;

    case '/about':
      component = <About />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className={styles.container}>{component}</div>
    </>
  );
};

export default App;
