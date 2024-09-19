import axios from 'axios';

export const getCurrencys = async () => {
  const url = `${import.meta.env.VITE_CURRENCY_API_URL}/latest?access_key=${import.meta.env.VITE_CURRENCY_API_KEY}`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (e) {
    if (e.response) {
      throw new Error(e.response.data.message);
    }

    if (e.request) {
      throw new Error('Sorry, something went wrong. Try again later.');
    }
  }
};
