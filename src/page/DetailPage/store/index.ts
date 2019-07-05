import { action, observable } from 'mobx';
import axios from 'axios';
import { IDetail } from './types';

/**
 * Store
 */

class DetailStore {
  @observable loading: boolean;
  @observable error: any;
  @observable detail: IDetail;


  constructor() {
    this.loading = true;

    this.error = {};
    this.detail = observable.object({
      id: null,
      desc: null,
      name: null,
      race: null,
    });
  }

  /**
   * Action on get detail
   * @param name
   */
  @action getDetail = (name: string) => {
    this.loading = true;
    axios({
      method: 'get',
      url: `https://strainapi.evanbusse.com/iNDpCGe/strains/search/name/${name}`,
    })
        .then(response => {
          this.detail = response.data[0];
          this.loading = false;
        })
        .catch(error => {
          this.error = error;
          this.loading = false;
        });

  };

  @action setClear = () => {
    this.detail = observable.object({
      id: null,
      desc: null,
      name: null,
      race: null,
    });
  }
}

export default new DetailStore();
