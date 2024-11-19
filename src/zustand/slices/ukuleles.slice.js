import axios from "axios";

const createUkulelesSlice = (set,get) => ({
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
    }
})

export default createUkulelesSlice