// App.js (Frontend)
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [fromBackend, setfromBackend] = useState([]);

  useEffect(() => {
    // Replace with your actual backend URL
    axios.get('/api/data')
      .then((response) => {
        setfromBackend([response.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className='color:blue '>Getting started</div>
      <h1>From Backend</h1>
      <h2>Total Data {fromBackend.length}</h2>
      {
        fromBackend.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.reg}</h2>
          </div>
        ))
      }
    </>
  );
}

export default App;
