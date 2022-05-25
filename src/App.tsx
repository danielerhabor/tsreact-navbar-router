import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';

import styles from './App.module.css';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
