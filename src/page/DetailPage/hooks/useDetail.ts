import store from '../store';
import { useEffect } from 'react';

export default (name?: string) => {
  useEffect(() => {
    if (name) {
      store.getDetail(name);
    }
  }, []);
  return store;
};
