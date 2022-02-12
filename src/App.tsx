import React from 'react';
import { Header } from './components/Header';
import { Options } from './components/Options';
import { Footer } from './components/Footer';
import { OptionsProvider } from './context/OptionsContext';
import { Output } from './components/Output';

const App: React.FC = () => {
  return (
    <div className='min-h-screen relative flex flex-col pb-24'>
      <Header />

      <div className='flex dxl:flex-col dxl:items-center justify-between w-9/12 mx-auto overflow-x-hidden mt-4 max-w-screen-xl'>
        <OptionsProvider>
          <Options />
          <Output />
        </OptionsProvider>
      </div>

      <Footer />
    </div>
  );
};

export default App;
