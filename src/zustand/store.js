import { create } from "zustand";


const useStore = create((set, get) => ({
  bikes: []
}))


export default useStore;
