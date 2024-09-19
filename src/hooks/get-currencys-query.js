import { useQuery } from '@tanstack/react-query';

import { getCurrencys } from '../utils/http/currency';

const useGetCurrencys = () => {
  const queryData = useQuery({
    queryKey: ['currencys'],
    queryFn: () => getCurrencys(),
  });

  return { ...queryData };
};

export default useGetCurrencys;
