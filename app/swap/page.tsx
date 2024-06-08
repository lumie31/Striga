import { getExchangeRate } from '../shared/helpers/getExchangeRates';
import CurrencyConverter from './components/CurrencyConverter';

export default async function Swap() {
  const { data } = await getExchangeRate();

  return (
    <div className='flex items-center justify-center p-4'>
      <CurrencyConverter exchangeRates={data} />
    </div>
  );
}
