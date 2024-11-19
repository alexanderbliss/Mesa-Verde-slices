import { create } from 'zustand';
import axios from 'axios';
import createBikesSlice from './slices/bikes.slice'
import createBearsSlice from './slices/bears.slice'
import createShoesSlice from './slices/shoes.slice'
import createUkulelesSlice from './slices/ukuleles.slice'
import {devtools } from 'zustand/middleware'

const useStore = create(devtools((set, get) => ({

  ...createBikesSlice(set,get), // this spreads the contents of bike slice
  ...createBearsSlice(set,get),  
  ...createShoesSlice(set,get),  
  ...createUkulelesSlice(set,get),

})));

export default useStore;


//seperation of concerns
    // each recourses logic is isolated and independitly maintanable.
// Better code Orginzation
      // easier to find and work on specific functionality
// improved scalability
       // new recourse can be added without touching existing code. 
// Easier collabaration
    // differant team members can work on different sclices without conflic
//better testability
       //slices can be tested in isolation.
