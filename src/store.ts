import { proxy, subscribe as valtioSubscribe, snapshot } from "valtio";
export interface Snippet {
  dates?: Dates;
  upvote?: number;
  downvote?: number;
  favourite?: boolean;
  tags?: any[];
  _id?: string;
  title: string;
  content: string;
  description?: string;
  author: string;
  language?: string;
  __v?: number;
}

export interface Dates {
  created: string;
}

export interface Store {
  title: string;
  text: string;
}

const store = proxy<Snippet>({
  author: "",
  title: "",
  content: "",
});

export const load = (client: string): void => {
  fetch(`http://localhost:4000/${client}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      store.title = data.title;
      store.author = data.author;
      store.content = data.content;
    });
};

export const subscribe = (callback: (state: Snippet) => void): (() => void) => {
  callback(snapshot(store));
  return valtioSubscribe(store, () => callback(snapshot(store)));
};

export default store;
