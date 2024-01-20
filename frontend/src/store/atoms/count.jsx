import { atom } from "recoil";

export const count = atom({
  key: "count",
  default: 0,
});

export const evenSelector = atom({
  name: "evenSelector",
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(count);
    return count % 2;
  },
});