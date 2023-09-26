import { defineStore } from "pinia";
import { store } from "../index";

export const appStore = defineStore("app", {
  state: () => ({
    counter: 0,
    title: import.meta.env.VITE_APP_TITLE, // 标题
  }),
  getters: {
    getTitle(): string {
      return this.title;
    },
  },
  actions: {
    setTitle(title: string): void {
      this.title = title;
    },
  },
});

export const useAppStoreWithOut = () => {
  return appStore(store);
};
