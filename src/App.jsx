import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from './assets/components/Buscador'
import { Api } from './assets/components/Api';

function App() {
  const [data, setData] = useState([])
  const [dataBusca, setDataBusca] = useState([]);

  return (
    <>
    <div className="container">
     <img src="bg-flags.png" alt="Banner Banderas" className="banner" />
     <Buscador data={data} setDataBusca={setDataBusca} />
     <Api data={dataBusca.length > 0 ? dataBusca : data} setData={setData} />
    </div>
    </>
  )
}

export default App
