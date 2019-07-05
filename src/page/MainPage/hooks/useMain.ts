import store from '../store';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    if(store.lists.size === 0) {
      store.getLists().catch();
    }
  }, []);

  return store;
};
