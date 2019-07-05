export interface IList {
  id: number;
  race: string;
  flavors: string[];
  effects: {
    medical: string[];
    negative: string[];
    positive: string[];
  };
}
