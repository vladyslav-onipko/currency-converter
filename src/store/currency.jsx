import { createContext, useState, useCallback } from 'react';

import formatNumber from '../utils/helpers/format-number';

export const CurrencyContext = createContext({
  amountFrom: 0,
  amountTo: 0,
  currencyFrom: '',
  currencyTo: '',
  amountFromChangeHandler: () => {},
  amountToChangeHandler: () => {},
  currencyFromChangeHandler: () => {},
  currencyToChangeHandler: () => {},
});

export const CyrrencyContextProvider = ({ children }) => {
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState('UAH');
  const [currencyTo, setCurrencyTo] = useState('USD');

  const amountFromChangeHandler = useCallback(
    (currnetAmount, rates) => {
      setAmountTo(formatNumber((currnetAmount * rates[currencyTo]) / rates[currencyFrom], 4));
      setAmountFrom(currnetAmount);
    },
    [currencyFrom, currencyTo]
  );

  const amountToChangeHandler = useCallback(
    (currnetAmount, rates) => {
      setAmountFrom(formatNumber((currnetAmount * rates[currencyFrom]) / rates[currencyTo], 4));
      setAmountTo(currnetAmount);
    },
    [currencyFrom, currencyTo]
  );

  const currencyFromChangeHandler = useCallback(
    (currentCurrency, rates) => {
      setAmountTo(formatNumber((amountFrom * rates[currencyFrom]) / rates[currentCurrency], 4));
      setCurrencyFrom(currentCurrency);
    },
    [amountFrom, currencyFrom]
  );

  const currencyToChangeHandler = useCallback(
    (currentCurrency, rates) => {
      setAmountFrom(formatNumber((amountTo * rates[currencyFrom]) / rates[currentCurrency], 4));
      setCurrencyTo(currentCurrency);
    },
    [amountTo, currencyFrom]
  );

  const ctx = {
    amountFrom,
    amountTo,
    currencyFrom,
    currencyTo,
    amountFromChangeHandler,
    amountToChangeHandler,
    currencyFromChangeHandler,
    currencyToChangeHandler,
  };

  return <CurrencyContext.Provider value={ctx}>{children}</CurrencyContext.Provider>;
};
