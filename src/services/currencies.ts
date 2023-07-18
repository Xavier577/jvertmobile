const FETCH_SUPPORTED_CURRENCIES_URL =
  'https://api.currencyfreaks.com/v2.0/supported-currencies';

export async function fetchSupportedCurrencies() {
  return fetch(FETCH_SUPPORTED_CURRENCIES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
}
