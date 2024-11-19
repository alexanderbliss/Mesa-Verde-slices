import axios from "axios";



const createBearsSlice = (set,get) => ({
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
    }

})

export default createBearsSlice