import axios from 'axios';

const createBikesSlice = (set,get) => ({
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
});

export default createBikesSlice