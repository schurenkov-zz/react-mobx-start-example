import { action, observable, ObservableMap, runInAction } from 'mobx';
import { IList } from './types';
import axios from 'axios';


class MainStore {
  @observable error: any;
  @observable loading: boolean;
  @observable lists: ObservableMap<string, IList>;

  constructor() {
    this.lists = observable.map({});
    this.loading = true;
  }

  /**
   * Request on get all lists
   */
  @action getLists = () =>
    axios({
      method: 'get',
      url: 'http://strainapi.evanbusse.com/iNDpCGe/strains/search/all',
    })
      .then(response => {
        runInAction(() => {
          Object.keys(response.data).map(article => this.lists.set(article, response.data[article]));
          this.loading = false;
        });
      })
      .catch(error => {
        this.error = error;
        this.loading = false;
      });

}

export default new MainStore();
