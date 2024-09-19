import dollarIcon from '../../assets/dollar.svg';
import euroIcon from '../../assets/euro.svg';

import Spinner from '../ui/base/Spinner';

import useGetCurrencys from '../../hooks/get-currencys-query';

const CurrencyBarItem = ({ icon, title }) => {
  return (
    <p className="flex items-center justify-center mx-[30px] sm:mx-[10px]">
      <span className="block size-16 mr-[15px] sm:mr-[10px] sm:size-12">
        <img src={icon} alt={title} />
      </span>
      <span className="text-[2.4rem] text-white sm:text-[1.8rem]">{title}</span>
    </p>
  );
};

const CurrencyBar = () => {
  const { data, isSuccess, isError, isPending } = useGetCurrencys();
  let content;

  if (isPending) {
    content = <Spinner />;
  }

  if ((!isPending && isError) || (data && !data.success)) {
    content = (
      <p className="text-[2rem] text-red-400 text-center font-bold">Faild to fatch latest currency information :(</p>
    );
  }

  if (isSuccess && !isPending && data && data.success) {
    const eurToUah = data.rates.UAH ? data.rates.UAH.toFixed(2) : 0; // calculate EUR to UAH (base is EUR)
    const usdToUah = data.rates.USD ? (eurToUah / data.rates.USD).toFixed(2) : 0; // calculate USD to UAH

    content = (
      <>
        <CurrencyBarItem icon={dollarIcon} title={usdToUah} />
        <CurrencyBarItem icon={euroIcon} title={eurToUah} />
      </>
    );
  }

  return <div className="flex items-center justify-center min-w-[350px] sm:min-w-0">{content}</div>;
};

export default CurrencyBar;
