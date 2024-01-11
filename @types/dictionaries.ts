export interface IDict {
  en: () => Promise<{}>;
  th: () => Promise<{}>;
}

export interface IWord {
  [T: string]: IKeyValue;
}

interface IKeyValue {
  [T: string]: string;
}
