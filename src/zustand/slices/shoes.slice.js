import axios from "axios";

const createShoesSlice = (set,get) => ({

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
    }
})

export default createShoesSlice