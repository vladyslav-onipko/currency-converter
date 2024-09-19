import CurrencyForm from '../components/currency/CurrencyForm';

import { CyrrencyContextProvider } from '../store/currency';

const HomePage = () => {
  return (
    <section className="w-full px-[20px]">
      <h2 className="text-center mb-[30px] text-[9rem] font-bold bg-gradient-to-r from-cyan-700 to-cyan-900 text-transparent bg-clip-text md:text-[7rem] sm:text-[3rem]">
        Convert currency
      </h2>
      <div className="w-full max-w-[1200px] min-h-[300px] flex items-center p-[30px] mx-auto shadow-lg border-2 border-cyan-700 rounded-lg bg-white shadow-white sm:p-[5px]">
        <CyrrencyContextProvider>
          <CurrencyForm />
        </CyrrencyContextProvider>
      </div>
    </section>
  );
};

export default HomePage;
