import { useEffect, useState } from 'react';
import axios from 'axios';
import useStore from '../../zustand/store'

function App() {

  const [manufacturerInput, setManufacturerInput] = useState('');
  const [modelInput, setModelInput] = useState('')

    const bikes = useStore((state) => state.bikes)
    const fetchBikes = useStore((state) => state.fetchBikes)
    const createBike = useStore((state) => state.createBike)

 useEffect(() => {
    fetchPikachu();
    fetchRaichu();
    fetchBikes();
  }, []);

    const handleBikeSubmit = (event) => {
      try {
        event.preventDefault();
        const newBike = {
          manufacturer: manufacturerInput,
          model: modelInput
        }
        createBike(newBike)
        setManufacturerInput('')
        setModelInput('')
      } catch (error) {
        console.log('createBikeError', error);
      }
    }

  //Using .then to handle an asychronous operration:
  function fetchPikachu() {
    axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/pikachu'
    }).then((response) => {
      // Do something with the response:
      console.log('Got some data:', response.data)
    })
    .catch((error) => {
      console.log('error in fetchPikachu', error);
    });
  }
  // function fetchPikachu(){axios({})   .then((=>{})   .catch((=>{})))}
  //  async fucntion fetchRaichu(){try{}catch{}}

  
  //Using Async/wait to handle an asychronous operation:
  async function fetchRaichu() {
    try {
    const response = await axios({
      method: 'GET', //Capials Matter
      url: 'https://pokeapi.co/api/v2/pokemon/raichu'
    })
    // Do soething with response
    console.log('Got some data:', response.data);
  } catch (error) {
    //handle the error
    console.log('Error in fetchRaighu:', error);
  }


}
  return (
    <div>

    <h1>Create a bike</h1>
    <form onSubmit={handleBikeSubmit}>
    <input type="text"
           placeholder="Manufacturer"
           value={manufacturerInput}
           onChange={(event) => setManufacturerInput(event.target.value)} 
           />
    <input type="text"
           placeholder="Model"
           value={modelInput}
           onChange={(event) => setModelInput(event.target.value)}
           />
           <button type="submit">Submit</button>
    </form>


      <h1>Bikes</h1>
      <ul>
        {
          bikes.map((bike) => {
            return (
              <li key={bike.id} >
                {bike.manufacturer} {bike.model}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}


export default App;
