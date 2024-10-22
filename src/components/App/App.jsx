import { useEffect } from 'react';
import axios from 'axios';


function App() {
 useEffect(() => {
    fetchPikachu();
  }, []);

  function fetchPikachu() {
    axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/pikachu'
    }).then((response) => {
      // Do something with the response:
      console.log('Got some data:', response.data)
    })
  }

  return (
    <div>
      <h1>Bikes</h1>
    </div>
  );
}


export default App;
