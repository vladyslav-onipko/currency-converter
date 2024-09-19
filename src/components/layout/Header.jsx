import Logo from '../logo/Logo';
import CurrencyBar from '../currency/CurrencyBar';

const Header = () => {
  return (
    <header className="w-full h-full flex justify-between items-center" role="banner">
      <Logo />
      <CurrencyBar />
    </header>
  );
};

export default Header;
