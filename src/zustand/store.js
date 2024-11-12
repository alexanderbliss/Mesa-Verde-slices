import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
  // Bikes state and actions
  bikes: [],
  fetchBikes: async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: '/api/bikes'
      });
      const bikes = response.data;
      set({ bikes });
    } catch (err) {
      console.log('fetchBikes error:', err);
    }
  },
  createBike: async (newBike) => {
    try {
      await axios({
        method: 'POST',
        url: '/api/bikes',
        data: newBike
      });
      get().fetchBikes();
    } catch (err) {
      console.log('createBike error:', err);
    }
  },
  updateBike: async (id, updatedBike) => {
    try {
      await axios({
        method: 'PUT',
        url: `/api/bikes/${id}`,
        data: updatedBike
      });
      get().fetchBikes();
    } catch (err) {
      console.log('updateBike error:', err);
    }
  },
  deleteBike: async (id) => {
    try {
      await axios({
        method: 'DELETE',
        url: `/api/bikes/${id}`
      });
      get().fetchBikes();
    } catch (err) {
      console.log('deleteBike error:', err);
    }
  },

  // Bears state and actions
  bears: [],
  fetchBears: async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: '/api/bears'
      });
      const bears = response.data;
      set({ bears });
    } catch (err) {
      console.log('fetchBears error:', err);
    }
  },
  createBear: async (newBear) => {
    try {
      await axios({
        method: 'POST',
        url: '/api/bears',
        data: newBear
      });
      get().fetchBears();
    } catch (err) {
      console.log('createBear error:', err);
    }
  },
  updateBear: async (id, updatedBear) => {
    try {
      await axios({
        method: 'PUT',
        url: `/api/bears/${id}`,
        data: updatedBear
      });
      get().fetchBears();
    } catch (err) {
      console.log('updateBear error:', err);
    }
  },
  deleteBear: async (id) => {
    try {
      await axios({
        method: 'DELETE',
        url: `/api/bears/${id}`
      });
      get().fetchBears();
    } catch (err) {
      console.log('deleteBear error:', err);
    }
  },

  // Shoes state and actions
  shoes: [],
  fetchShoes: async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: '/api/shoes'
      });
      const shoes = response.data;
      set({ shoes });
    } catch (err) {
      console.log('fetchShoes error:', err);
    }
  },
  createShoe: async (newShoe) => {
    try {
      await axios({
        method: 'POST',
        url: '/api/shoes',
        data: newShoe
      });
      get().fetchShoes();
    } catch (err) {
      console.log('createShoe error:', err);
    }
  },
  updateShoe: async (id, updatedShoe) => {
    try {
      await axios({
        method: 'PUT',
        url: `/api/shoes/${id}`,
        data: updatedShoe
      });
      get().fetchShoes();
    } catch (err) {
      console.log('updateShoe error:', err);
    }
  },
  deleteShoe: async (id) => {
    try {
      await axios({
        method: 'DELETE',
        url: `/api/shoes/${id}`
      });
      get().fetchShoes();
    } catch (err) {
      console.log('deleteShoe error:', err);
    }
  },

  // Ukuleles state and actions
  ukuleles: [],
  fetchUkuleles: async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: '/api/ukuleles'
      });
      const ukuleles = response.data;
      set({ ukuleles });
    } catch (err) {
      console.log('fetchUkuleles error:', err);
    }
  },
  createUkulele: async (newUkulele) => {
    try {
      await axios({
        method: 'POST',
        url: '/api/ukuleles',
        data: newUkulele
      });
      get().fetchUkuleles();
    } catch (err) {
      console.log('createUkulele error:', err);
    }
  },
  updateUkulele: async (id, updatedUkulele) => {
    try {
      await axios({
        method: 'PUT',
        url: `/api/ukuleles/${id}`,
        data: updatedUkulele
      });
      get().fetchUkuleles();
    } catch (err) {
      console.log('updateUkulele error:', err);
    }
  },
  deleteUkulele: async (id) => {
    try {
      await axios({
        method: 'DELETE',
        url: `/api/ukuleles/${id}`
      });
      get().fetchUkuleles();
    } catch (err) {
      console.log('deleteUkulele error:', err);
    }
  },
}));

export default useStore;