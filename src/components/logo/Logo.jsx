import logoImage from '../../assets/logo.png';

const Logo = () => {
  return (
    <h1 className="w-[70px] h-[70px] rounded-full overflow-hidden sm:w-[50px] sm:h-[50px] sm:shrink-0">
      <img className="w-full h-auto" src={logoImage} alt="currency" />
    </h1>
  );
};

export default Logo;
