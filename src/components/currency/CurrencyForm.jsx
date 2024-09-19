import { useContext, useEffect } from 'react';

import CurrencyGroup from './CurrencyGroup';
import Spinner from '../ui/base/Spinner';
import ErrorBlock from '../ui/base/ErrorBlock';

import useGetCurrencys from '../../hooks/get-currencys-query';
import { CurrencyContext } from '../../store/currency';

const CurrencyForm = () => {
  const {
    amountFrom,
    amountTo,
    currencyFrom,
    currencyTo,
    amountFromChangeHandler,
    amountToChangeHandler,
    currencyFromChangeHandler,
    currencyToChangeHandler,
  } = useContext(CurrencyContext);

  const { data, isSuccess, isError, isPending, error } = useGetCurrencys();

  let content;

  if (isPending) {
    content = <Spinner />;
  }

  if ((!isPending && isError) || (data && !data.success)) {
    content = <ErrorBlock message={error?.message || 'Something went wrong. Try again later.'} />;
  }

  if (isSuccess && !isPending && data && data.success) {
    const rates = Object.keys(data.rates);

    content = (
      <>
        <CurrencyGroup
          selectId="select-currency-1"
          inputId="input-currency-1"
          options={rates}
          selectValue={currencyFrom}
          inputValue={amountFrom}
          onSelect={(e) => currencyFromChangeHandler(e.target.value, data.rates)}
          onInput={(e) => amountFromChangeHandler(+e.target.value, data.rates)}
        />
        <CurrencyGroup
          selectId="select-currency-2"
          inputId="input-currency-2"
          options={rates}
          selectValue={currencyTo}
          inputValue={amountTo}
          onSelect={(e) => currencyToChangeHandler(e.target.value, data.rates)}
          onInput={(e) => amountToChangeHandler(+e.target.value, data.rates)}
        />
      </>
    );
  }

  // Calculate default currency value
  useEffect(() => {
    if (data && data.rates) {
      amountFromChangeHandler(1, data.rates);
    }
  }, [data, amountFromChangeHandler]);

  return (
    <div className="flex justify-center items-center gap-x-[50px] w-full h-full flex-wrap sm:gap-y-[30px]">
      {content}
    </div>
  );
};

export default CurrencyForm;
