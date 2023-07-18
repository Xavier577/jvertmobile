import {useEffect, useState} from 'react';
import {CreateNullClass} from '../utils/null-class';

export default function useFetch<T = any>(
  dataFetcher: Promise<T>,
): [T, any, boolean] {
  const [data, setData] = useState<T>(CreateNullClass<T>());
  const [error, setError] = useState<any>(null);
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    dataFetcher
      .then(result => {
        setData(result);
        console.log('mount');
        setIsDataReady(true);
      })
      .catch(err => setError(err));
  }, []);

  return [data, error, isDataReady];
}
