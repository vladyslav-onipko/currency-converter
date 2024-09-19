import Header from './Header';
import HomePage from '../../pages/Home';

const Root = () => {
  return (
    <div className="w-full h-full flex flex-col min-h-screen overflow-x-hidden">
      <div className="w-full h-[90px] mx-auto my-0 py-[15px] px-[20px] bg-cyan-900/85 sm:px-[10px]">
        <Header />
      </div>
      <div className="grow relative w-full">
        <main className="w-full h-screen flex items-center justify-center" role="main">
          <HomePage />
        </main>
      </div>
    </div>
  );
};

export default Root;
